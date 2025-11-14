import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbClient from "@/prisma/DbClient";
import { sendResendEmail } from "@/utils/Resend";

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
        if (!credentials?.email || !credentials?.password) return null;

        const user = await dbClient.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;
        if (user.password !== credentials.password) return null;

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
      let dbUser = await dbClient.user.findUnique({
        where: { email: user.email! },
      });

      if (!dbUser) {
        dbUser = await dbClient.user.create({
          data: {
            email: user.email!,
            name: user.name || "",
            profileImage: user.image || "",
            googleId: account?.provider === "google" ? profile?.sub : null,
          },
        });

        // await sendResendEmail({
        //   to: user.email!,
        //   subject: "Welcome to Halo!",
        //   body: `<h1>Welcome to Halo, ${
        //     user.name || "User"
        //   }!</h1><p>We're excited to have you on board.</p>`,
        // });
      }

      if (account?.provider === "google" && !dbUser.googleId) {
        await dbClient.user.update({
          where: { email: user.email! },
          data: { googleId: profile?.sub },
        });
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
