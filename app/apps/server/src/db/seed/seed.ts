import { db } from "..";
import {
  activities,
  activityTypes,
  avatars,
  badgeTypes,
  modules,
  qnaDetails,
  qnaOptions,
  titles,
  users,
} from "../schema";
import { userModules } from "../schema/userModule";
import { introducaoLGPDActivities } from "./activities/introducaoLGPD";

// TODO: Cleanup toda vez que rodar seed? Atualmente, limpo local.db
async function seed() {
  // fixo, ir separando em arquivos/funções
  await db.insert(avatars).values([{ filePath: "avatars/avatar_1.svg" }]);
  await db.insert(titles).values([{ name: "Aprendiz dos dados pessoais" }]);
  await insertModules();
  await insertActivities();
  await db
    .insert(badgeTypes)
    .values([{ name: "bronze" }, { name: "silver" }, { name: "gold" }]);

  insertMockUser();
}

seed().catch((err) => {
  console.error("Erro durante o seeding:", err);
});

async function insertModules() {
  const moduleNames = [
    "Introdução à LGPD",
    "Conceitos Básicos",
    "Operações de Tratamento",
    "Princípios de Tratamento",
    "Inventário de Dados I",
    "Inventário de Dados II",
    "Ciclo de Vida do Dado",
  ];

  let previousModuleId: number | null = null;

  // maxPoints é calculado como a soma dos pontos das atividades dos módulos, manter consistente quando inserir os dados reais.
  // possivelmente criar os objetos de atividades ANTES, calcular e inserir tudo na ordem correta do db!
  const maxPoints = 40;

  for (const name of moduleNames) {
    const [newModule]: {
      id: number;
    }[] = await db
      .insert(modules)
      .values({ name, maxPoints, requiredModuleId: previousModuleId })
      .returning({ id: modules.id });

    previousModuleId = newModule.id;
  }
}

async function insertActivities() {
  // Acredito que não vou separar QNA e QNAMultiple AQUI. No backend separo pelo isMultiple;
  await db.insert(activityTypes).values({ name: "QNA" });
  introducaoLGPDActivities.forEach((activity) => insertActivity(activity, 1));
}

// TODO: Tipar corretamente
async function insertActivity(activity: any, moduleId: number) {
  {
    const { name, type, points } = activity;
    const [newActivity] = await db
      .insert(activities)
      .values({
        name: name,
        moduleId,
        typeId: type,
        points: points,
      })
      .returning({ id: activities.id });

    // qna. fazer enum depois, com switch case.
    if (activity.type == 1) {
      const { question, isMultiple, options, answers, answer } = activity;

      await db.insert(qnaDetails).values({
        activityId: newActivity.id,
        question,
        isMultiple,
      });
      await db.insert(qnaOptions).values(
        options.map((option: any) => ({
          activityId: newActivity.id,
          text: option,
          isCorrect: isMultiple ? answers?.includes(option) : option === answer,
        }))
      );
    }
  }
}

async function insertMockUser() {
  const [user] = await db
    .insert(users)
    .values({
      name: "Samantha Costa",
      points: 0, // Zerar quando fizer lógica de pontos do usuário.
      avatarId: 1,
      titleId: 1,
    })
    .returning({ id: users.id });

  // Zerar quando fizer lógica de obtenção de badges.
  // await db.insert(userBadges).values([
  //   { userId: user.id, moduleId: 1, typeId: BadgeTypes.GOLD },
  //   { userId: user.id, moduleId: 2, typeId: BadgeTypes.SILVER },
  //   { userId: user.id, moduleId: 3, typeId: BadgeTypes.BRONZE },
  // ]);

  // Relações com módulos: apenas módulos non-locked desde o começo.
  await db.insert(userModules).values({ userId: user.id, moduleId: 1 });
}
