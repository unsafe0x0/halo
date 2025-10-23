import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbClient from "@/prisma/DbClient";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await dbClient.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          return null;
        }

        if (user.password !== credentials.password) {
          return null;
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name || "",
          profileImage: user.profileImage || "",
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const googleId = profile?.sub || user.id;

        const dbUser = await dbClient.user.findUnique({
          where: { email: user.email! },
        });

        if (!dbUser) {
          await dbClient.user.create({
            data: {
              email: user.email!,
              name: user.name || "",
              profileImage: user.image || "",
              googleId,
            },
          });
        } else {
          if (!dbUser.googleId) {
            await dbClient.user.update({
              where: { email: user.email! },
              data: { googleId },
            });
          }
        }
      }
      return true;
    },

    async jwt({ token }) {
      const dbUser = await dbClient.user.findUnique({
        where: { email: token.email as string },
      });

      if (dbUser) {
        token.id = dbUser.id;
        token.name = dbUser.name;
        token.email = dbUser.email;
        token.profileImage = dbUser.profileImage;
        token.googleId = dbUser.googleId;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.profileImage = token.profileImage;
        session.user.googleId = token.googleId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
