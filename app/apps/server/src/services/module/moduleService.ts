import { db, DrizzleClient } from "../../db";
import {
  createUserModule,
  getModuleById,
  getModulesByUserId,
  updateUserModulePoints,
} from "../../repositories/module";
import { grantUserBadges } from "../user/userService";
import { mapModule } from "./mappers";
import { validateModuleAccess, validateModuleExists } from "./validators";

export async function getModules(userId: string) {
  const modules = await getModulesByUserId(userId);
  return modules.map(mapModule);
}

export async function getModule(userId: string, moduleId: number) {
  const module = await getModuleById(userId, moduleId);
  validateModuleExists(module);

  const baseModule = mapModule(module);
  return {
    ...baseModule,
    previousModuleId: module.requiredModuleId,
    nextModuleId: module.dependentModuleId,
  };
}

export async function updateModuleProgress(
  userId: string,
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

  const shouldUnlockModule =
    oldModuleProgress < 0.7 && newModuleProgress >= 0.7;
  if (dependentModuleId && shouldUnlockModule) {
    await createUserModule(userId, dependentModuleId, dbClient);
  }

  return await grantUserBadges(
    userId,
    moduleId,
    oldModuleProgress,
    newModuleProgress,
    dbClient
  );
}
