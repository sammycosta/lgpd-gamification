import { and, eq } from "drizzle-orm";
import { alias } from "drizzle-orm/sqlite-core";
import { db } from "../db";
import { modules, userModules } from "../db/schema";

export async function getModulesByUserId(userId: string) {
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
      and(eq(userModules.moduleId, modules.id), eq(userModules.userId, userId)),
    )
    .orderBy(modules.id)
    .all();
}

export async function getModuleById(userId: string, moduleId: number) {
  const dependentModules = alias(modules, "dependentModules");
  return db
    .select({
      id: modules.id,
      name: modules.name,
      maxPoints: modules.maxPoints,
      requiredModuleId: modules.requiredModuleId,
      userModulesId: userModules.id,
      points: userModules.points,
      dependentModuleId: dependentModules.id, // Pela regra de negócio do MVP, apenas um.
    })
    .from(modules)
    .where(eq(modules.id, moduleId))
    .leftJoin(
      userModules,
      and(eq(userModules.moduleId, modules.id), eq(userModules.userId, userId)),
    )
    .leftJoin(
      dependentModules,
      eq(dependentModules.requiredModuleId, modules.id),
    )
    .get();
}

export async function getDependentModule(moduleId: number) {
  const dependentModules = alias(modules, "dependentModules");
  return await db
    .select({ id: dependentModules.id })
    .from(modules)
    .where(eq(modules.id, moduleId))
    .innerJoin(
      dependentModules,
      eq(dependentModules.requiredModuleId, modules.id),
    )
    .get();
}
