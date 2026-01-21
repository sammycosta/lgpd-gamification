import { eq } from "drizzle-orm";
import { db, DrizzleClient } from "../db";
import { userModules } from "../db/schema";

export async function createUserModule(
  userId: string,
  moduleId: number,
  dbClient: DrizzleClient = db,
) {
  return await dbClient.insert(userModules).values({ userId, moduleId }).run();
}

export async function updateUserModulePoints(
  userModulesId: number,
  points: number,
  dbClient: DrizzleClient = db,
) {
  return await dbClient
    .update(userModules)
    .set({ points })
    .where(eq(userModules.id, userModulesId))
    .run();
}
