import { db } from "@/db";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function createContext(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  return { db, session };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
