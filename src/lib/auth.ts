import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        founder: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials.password !== process.env.MIND_FORGE_PASSWORD) {
          return null;
        }
        return { name: credentials.founder as string };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
