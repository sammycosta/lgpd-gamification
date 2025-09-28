import { db } from "@/db";
import type { NextRequest } from "next/server";

export async function createContext(req: NextRequest) {
  // const session = await auth.api.getSession({
  // 	headers: req.headers,
  // });
  // return {
  // 	session,
  // };
  //TODO: ADD auth aqui
  // TODO: Ver se a linha abaixo faz sentido. Por enquanto sim, mas depois deve ficar mais parecido com o arquivo auth.ts
  return { db }; // Torna a conexão com o Drizzle acessível em 'ctx.db'
}

export type Context = Awaited<ReturnType<typeof createContext>>;
