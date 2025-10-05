import { db, DrizzleClient } from "@/db";
import {
  createUserModule,
  getModuleById,
  getModulesByUserId,
  updateUserModulePoints,
} from "@/repositories/module";
import { Module } from "@/types/entities";
import { TRPCError } from "@trpc/server";
import { grantUserBadges } from "./userService";
import { validateModuleAccess } from "./validation/moduleGuards";

function mapModule({ id, name, points, maxPoints, userModulesId }: Module) {
  return {
    id,
    name,
    icon: null, //INSERIR FUTURAMENTE
    points: points ?? 0,
    maxPoints,
    locked: userModulesId == null,
    progressPercentage:
      maxPoints > 0 && points ? (points / maxPoints) * 100 : 0,
  };
}

export async function getModules(userId: number) {
  const modules = await getModulesByUserId(userId);
  return modules.map(mapModule);
}

export async function getModule(userId: number, moduleId: number) {
  const module = await getModuleById(userId, moduleId);
  if (module) {
    const baseModule = mapModule(module);
    return {
      ...baseModule,
      previousModuleId: module.requiredModuleId,
      nextModuleId: module.dependentModuleId,
    };
  }
  throw new TRPCError({ code: "NOT_FOUND", message: "Módulo não encontrado." });
}

export async function updateModuleProgress(
  userId: number,
  activity: { moduleId: number; points: number },
  dbClient: DrizzleClient = db
) {
  const moduleId = activity.moduleId;
  const module = await getModuleById(userId, moduleId);
  const userModuleData = validateModuleAccess(module, moduleId);

  const { userModulesId, currentPoints, maxPoints, dependentModuleId } =
    userModuleData;

  const newPoints = currentPoints + activity.points;
  await updateUserModulePoints(userModulesId, newPoints, dbClient);

  const oldModuleProgress = currentPoints / maxPoints;
  const newModuleProgress = newPoints / maxPoints;

  const unlockedModule = oldModuleProgress < 0.7 && newModuleProgress >= 0.7;
  if (dependentModuleId && unlockedModule) {
    await createUserModule(userId, dependentModuleId);
  }

  await grantUserBadges(
    userId,
    moduleId,
    oldModuleProgress,
    newModuleProgress,
    dbClient
  );
}
