import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {
  handleBeforeDeleteUser,
  handleNewUser,
} from "..//services/user/userService";
import { db } from "../db";
import { authSchema } from "../db/schema";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessType: "offline",
      prompt: "select_account consent",
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: authSchema,
  }),
  databaseHooks: {
    user: { create: { after: handleNewUser } },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    refresh: true,
  },
  trustedOrigins: [process.env.CORS_ORIGIN || ""],
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    },
  },
  user: {
    deleteUser: {
      enabled: true,
      beforeDelete: async (user) => {
        handleBeforeDeleteUser(user.id);
      },
    },
  },
});
