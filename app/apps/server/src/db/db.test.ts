import { sql } from "drizzle-orm";
import { describe, expect, it } from "vitest";
import { db } from "./index";
import { activities, avatars, modules, titles } from "./schema";

describe("Database Infrastructure & Seed Validation", () => {
  it("should verify the database connection is active", async () => {
    const query = sql`SELECT 1 + 1 AS result`;

    const response = await db.run(query);

    expect(response).toBeDefined();
  });

  it("should verify that exactly four avatars were seeded", async () => {
    const avatarList = await db.select().from(avatars);

    expect(avatarList.length).toBe(4);
    expect(avatarList[0].filePath).toBe("avatars/avatar.svg");
  });

  it("should verify the default title was seeded correctly", async () => {
    const titleList = await db.select().from(titles);

    expect(titleList.length).toBe(1);
    expect(titleList[0].name).toBe("Aprendiz dos dados pessoais");
  });

  it("should verify that all seven modules exist in the database", async () => {
    const moduleList = await db.select().from(modules);

    expect(moduleList.length).toBe(7);
  });

  it("should verify the linear unlocking progression of modules", async () => {
    const sortedModules = await db.select().from(modules).orderBy(modules.id);

    // The first module should not have a requirement
    expect(sortedModules[0].requiredModuleId).toBeNull();

    // Each subsequent module must require the ID of the previous one
    for (let i = 1; i < sortedModules.length; i++) {
      expect(sortedModules[i].requiredModuleId).toBe(sortedModules[i - 1].id);
    }
  });

  it("should verify that activities have been populated across modules", async () => {
    const activityList = await db.select().from(activities);

    expect(activityList.length).toBeGreaterThan(0);
  });
});
