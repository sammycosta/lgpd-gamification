import { getModuleById, getModulesByUserId } from "@/repositories/module";
import { TRPCError } from "@trpc/server";

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
    return mapModule(module);
  }
  throw new TRPCError({ code: "NOT_FOUND", message: "Módulo não encontrado." });
}
