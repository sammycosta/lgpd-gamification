// src/tests/factories/module.factory.ts
import { randomUUID } from "node:crypto";
import { db } from "../../db";
import { modules, userModules } from "../../db/schema";

export async function createModule(
  overrides: Partial<typeof modules.$inferInsert> = {}
) {
  const [inserted] = await db
    .insert(modules)
    .values({
      name: `Module-${randomUUID()}`,
      maxPoints: 100,
      ...overrides,
    })
    .returning();
  return inserted;
}

export async function createUserModule(
  overrides: Partial<typeof userModules.$inferInsert> & {
    userId: string;
    moduleId: number;
  }
) {
  const [inserted] = await db
    .insert(userModules)
    .values({
      points: 0,
      ...overrides,
    })
    .returning();
  return inserted;
}
