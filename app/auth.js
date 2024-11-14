import { createGuest, getGuest } from "@/lib/data-service";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          await createGuest({ name: user.name, email: user.email });
        }

        return true;
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: "/signin",
    // signOut: "/signout",
  },
});
