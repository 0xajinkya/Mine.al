import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
});

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOLE_CLIENT_SECRET,
            authorization: GOOGLE_AUTHORIZATION_URL,
            name: "Google",
        })
    ],
    pages: {
        // signIn: "/signin",
    },
};

export default (req, res) => NextAuth(req, res, options);