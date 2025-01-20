import {
  createGuest,
  getGuest,
  getGuestByCredentials,
} from "@/lib/data-service";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await getGuestByCredentials(
            credentials.email,
            credentials.password
          );
          if (!user) {
            throw new Error("Invalid email or password");
          }
          return user;
        } catch (error) {
          console.error(error, "An error occured during login");
          return null;
        }
      },
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
    error: "/signin",
    // signOut: "/signout",
  },
});
