import { createGuest, getGuest } from "@/lib/data-service";
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
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = "test@mail.com";
        const password = "Password123";
        const name = "Test User";

        if (credentials.email === email && credentials.password === password) {
          return { email, password, name };
        } else {
          throw new Error("Invalid email or password");
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
    // signOut: "/signout",
  },
});
