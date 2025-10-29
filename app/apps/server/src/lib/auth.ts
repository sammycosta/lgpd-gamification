import { db } from "@/db";
import { authSchema } from "@/db/schema";
import { handleNewUser } from "@/services/user/userService";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
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
});
