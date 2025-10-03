import { db, DrizzleClient } from "@/db";
import {
  createUserModule,
  getDependentModule,
  getModuleById,
  getModulesByUserId,
  updateUserModulePoints,
} from "@/repositories/module";
import { TRPCError } from "@trpc/server";
import { grantUserBadges } from "./userService";

interface Module {
  id: number;
  name: string;
  points: number | null;
  maxPoints: number;
  userModulesId: number | null;
}

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

    console.log(module);
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
  const module = await getModuleById(userId, activity.moduleId);

  if (!module) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Módulo não encontrado.",
    });
  }
  const {
    id: moduleId,
    userModulesId,
    points: currentPoints,
    maxPoints,
  } = module;

  if (!userModulesId) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Acesso negado: Módulo bloqueado para o usuário.",
    });
  }

  const newPoints = currentPoints! + activity.points;
  await updateUserModulePoints(userModulesId, newPoints, dbClient);

  const oldModuleProgress = currentPoints! / maxPoints;
  const newModuleProgress = newPoints / maxPoints;

  // Rever se tem jeito melhor de fazer essa lógica
  if (oldModuleProgress < 0.7 && newModuleProgress >= 0.7) {
    const dependentModule = await getDependentModule(moduleId);
    if (dependentModule) {
      await createUserModule(userId, dependentModule.id);
    }
  }

  await grantUserBadges(
    userId,
    moduleId,
    oldModuleProgress,
    newModuleProgress,
    dbClient
  );

  // TODO: aumenta pontos no user?
}
