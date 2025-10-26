import { ActivityTypes } from "@/types/entities";
import {
  ActivityToInsert,
  BaseQnaActivity,
  MatchingActivity,
  QnaActivity,
  QnaMultipleActivity,
} from "@/types/seed";
import { db } from "..";
import {
  activities,
  activityTypes,
  avatars,
  badgeTypes,
  matchingPairs,
  modules,
  qnaDetails,
  qnaOptions,
  titles,
  userModules,
  users,
} from "../schema";
import { conceitosBasicosActivities } from "./activities/conceitosBasicos";
import { introducaoLGPDActivities } from "./activities/introducaoLGPD";

async function seed() {
  // TODO: Cleanup toda vez que rodar seed? Atualmente, limpo local.db
  // DADOS FIXOS
  await db.insert(avatars).values([{ filePath: "avatars/avatar_1.svg" }]);
  await db.insert(titles).values([{ name: "Aprendiz dos dados pessoais" }]);
  await insertModules();
  await insertActivities();
  await db
    .insert(badgeTypes)
    .values([{ name: "bronze" }, { name: "silver" }, { name: "gold" }]);

  // DADOS MOCK
  await insertMockUser();
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
  await db
    .insert(activityTypes)
    .values([{ name: "QNA" }, { name: "Matching" }]);
  introducaoLGPDActivities.forEach((activity) => insertActivity(activity, 1));
  conceitosBasicosActivities.forEach((activity) => insertActivity(activity, 2));
}

async function insertActivity(activity: ActivityToInsert, moduleId: number) {
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

    if (activity.type == ActivityTypes.QNA) {
      const { question, isMultiple, options } = activity as BaseQnaActivity;

      await db.insert(qnaDetails).values({
        activityId: newActivity.id,
        question,
        isMultiple,
      });

      await db.insert(qnaOptions).values(
        options.map((option) => ({
          activityId: newActivity.id,
          text: option,
          isCorrect: isMultiple
            ? (activity as QnaMultipleActivity).answers.includes(option)
            : option === (activity as QnaActivity).answer,
        }))
      );
    } else if (activity.type == ActivityTypes.MATCHING) {
      const matchingPairsToInsert = (activity as MatchingActivity)
        .matchingPairs;

      await db.insert(matchingPairs).values(
        matchingPairsToInsert.map((pair) => ({
          activityId: newActivity.id,
          ...pair,
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
      points: 0,
      avatarId: 1,
      titleId: 1,
    })
    .returning({ id: users.id });

  // Módulos desbloqueados por padrão
  await db.insert(userModules).values({ userId: user.id, moduleId: 1 });

  // MOCK para me ajudar a testar atividades, deixando todos os módulos desbloqueados por padrão.
  await db
    .insert(userModules)
    .values(
      [2, 3, 4, 5, 6, 7].map((num) => ({ userId: user.id, moduleId: num }))
    );
}
