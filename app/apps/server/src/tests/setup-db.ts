import { migrate } from "drizzle-orm/libsql/migrator";
import path from "path";
import { beforeAll } from "vitest";
import { db } from "../db";
import { runSeed } from "../db/seed/seed";

beforeAll(async () => {
  try {
    const migrationsPath = path.resolve(__dirname, "../db/migrations");
    await migrate(db as any, {
      migrationsFolder: migrationsPath,
    });
    await runSeed();
  } catch (error) {
    console.error("❌ Erro ao preparar banco de testes:", error);
    process.exit(1);
  }
});
