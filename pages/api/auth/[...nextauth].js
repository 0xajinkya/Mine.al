import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email";
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

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
        EmailProvider({
          name: 'Email',
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
            // from: 'onemineal@gmail.com',
          }),
    ],
    adapter: FirestoreAdapter({
        apiKey: process.env.FIREBASE_API_KEY,
        appId: process.env.FIREBASE_APP_ID,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        // Optional emulator config (see below for options)
        // emulator: {
        //     host: 'localhost',
        //     port: 3001,
        // },
      }),
    // jwt: {
    //     encryption: false
    // },
    // pages: {
    //     signIn: "/login",
    // },
    secret: process.env.JWT_SECRET
});