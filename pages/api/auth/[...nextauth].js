import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import EmailProvider from "next-auth/providers/email";
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import User from '../../../models/User';
import db from '../../../utils/db';
import bcryptjs from 'bcryptjs'

const GOOGLE_AUTHORIZATION_URL =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
    });

// const FACEBOOK_AUTHORIZATION_URL = "https://www.facebook.com/v11.0/dialog/oauth?scope=email"


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOLE_CLIENT_SECRET,
            authorization: GOOGLE_AUTHORIZATION_URL,
            name: "Google",
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                await db.connect();
                const user = await User.findOne({
                    email: credentials.email,
                });
                await db.disconnect();
                if (user && bcryptjs.compareSync(credentials.password, user.password)) {
                    return {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        image: 'f',
                        isAdmin: user.isAdmin,
                    };
                }
                throw new Error('Invalid email or password');
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?._id) token._id = user._id;
            if (user?.isAdmin) token.isAdmin = user.isAdmin;
            return token;
        },
        async session({ session, token }) {
            if (token?._id) session.user._id = token._id;
            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.JWT_SECRET
});