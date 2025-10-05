import { getModuleById } from "@/repositories/module";
import { TRPCError } from "@trpc/server";

export function validateModuleAccess(
  module: Awaited<ReturnType<typeof getModuleById>> | null,
  moduleId: number
) {
  if (!module) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: `Módulo ${moduleId} não encontrado.`,
    });
  }

  if (!module.userModulesId) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Acesso negado: Módulo bloqueado para o usuário.",
    });
  }

  if (module.points === null || module.maxPoints === null) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Dados de progresso de módulo inválidos (pontos nulos).",
    });
  }

  return {
    userModulesId: module.userModulesId,
    currentPoints: module.points,
    maxPoints: module.maxPoints,
    dependentModuleId: module.dependentModuleId,
  };
}
