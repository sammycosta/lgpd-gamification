import { db } from "@/db";
import { modules } from "@/db/schema";
import { userModules } from "@/db/schema/userModule";
import { and, eq } from "drizzle-orm";

function baseModuleQueryByUserId(userId: number) {
  return db
    .select({
      id: modules.id,
      name: modules.name,
      maxPoints: modules.maxPoints,
      requiredModuleId: modules.requiredModuleId,
      userModulesId: userModules.id,
      points: userModules.points,
    })
    .from(modules)
    .leftJoin(
      userModules,
      and(eq(userModules.moduleId, modules.id), eq(userModules.userId, userId))
    );
}
export async function getModulesByUserId(userId: number) {
  return baseModuleQueryByUserId(userId).orderBy(modules.id).all();
}

export async function getModuleById(userId: number, moduleId: number) {
  return baseModuleQueryByUserId(userId).where(eq(modules.id, moduleId)).get();
}
