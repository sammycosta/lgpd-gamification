import { getModulesByUserId } from "@/repositories/module";

export async function getModules(userId: number) {
  const modules = await getModulesByUserId(userId);
  return modules.map(({ id, name, points, maxPoints, userModulesId }) => ({
    id,
    name,
    icon: null, //INSERIR FUTURAMENTE
    points: points ?? 0,
    maxPoints,
    locked: userModulesId == null,
    progressPercentage: (points ?? 0 / maxPoints) * 100,
  }));
}
