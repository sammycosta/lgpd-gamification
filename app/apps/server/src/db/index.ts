import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({
  url: process.env.DATABASE_URL || "",
});

export const db = drizzle({ client });

export type DBType = typeof db;
type TransactionCallback = Parameters<DBType["transaction"]>[0];
export type TxClient = Parameters<TransactionCallback>[0];
export type DrizzleClient = DBType | TxClient;
