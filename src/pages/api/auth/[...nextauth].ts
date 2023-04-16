// Dotenv
import * as dotenv from "dotenv";
dotenv.config()

// Components
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Types
import type { AuthOptions } from "next-auth";

const auth_options: AuthOptions = {
  // Configure authentication providers
  providers: [
    GoogleProvider({
      clientId:       process.env.GOOGLE_CLIENT_ID!,
      clientSecret:   process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(auth_options);

