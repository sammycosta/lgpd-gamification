import { db } from "..";
import {
  avatars,
  badgeTypes,
  modules,
  titles,
  userBadges,
  users,
} from "../schema";

async function seed() {
  // fixo
  await db.insert(avatars).values([{ filePath: "avatars/avatar_1.svg" }]);

  await db.insert(titles).values([{ name: "Aprendiz dos dados pessoais" }]);

  await db
    .insert(modules)
    .values([
      { name: "Introdução à LGPD" },
      { name: "Conceitos Básicos" },
      { name: "Operações de Tratamento" },
      { name: "Princípios de Tratamento" },
      { name: "Inventário de Dados I" },
      { name: "Inventário de Dados II" },
      { name: "Ciclo de Vida do Dado" },
    ]);

  await db
    .insert(badgeTypes)
    .values([{ name: "bronze" }, { name: "silver" }, { name: "gold" }]);

  // mock
  await db.insert(users).values({
    name: "Samantha Costa",
    points: 1560,
    avatarId: 1,
    titleId: 1,
  });

  await db.insert(userBadges).values([
    { userId: 1, moduleId: 1, typeId: 3 },
    { userId: 1, moduleId: 2, typeId: 2 },
    { userId: 1, moduleId: 3, typeId: 1 },
  ]);
}

seed().catch((err) => {
  console.error("Erro durante o seeding:", err);
});

// TODO: Cleanup toda vez que rodar seed?
