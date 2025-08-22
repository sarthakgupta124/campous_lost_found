"use server"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "@/models/user";
import connection from "@/config/db";
import bcrypt from "bcryptjs";

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        await connection;

        const user = await UserModel.findOne({ email: credentials.email });
        if (!user) return null;

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) return null;

        return { id: user._id.toString(), name: user.name, email: user.email,contact:user.contact};
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name=user.name;
        token.contact=user.contact;
        token.email=user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.contact = token.contact;
      session.user.email = token.email;
      return session;
    }
  },
  pages: {
    signIn: "/auth/login" 
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
