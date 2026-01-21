import { db } from "..";
import { ActivityTypes } from "../../types/entities";
import {
  ActivityToInsert,
  BaseQnaActivity,
  MatchingActivity,
  QnaActivity,
  QnaMultipleActivity,
} from "../../types/seed";
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
} from "../schema";
import { cicloVidaDadoActivities } from "./activities/cicloVidaDado";
import { conceitosBasicosActivities } from "./activities/conceitosBasicos";
import { introducaoLGPDActivities } from "./activities/introducaoLGPD";
import { inventarioDadosIActivities } from "./activities/inventarioDadosI";
import { inventarioDadosIIActivities } from "./activities/inventarioDadosII";
import { operacoesTratamentoActivities } from "./activities/operacoesTratamento";
import { principiosTratamentoActivities } from "./activities/principiosTratamento";

const moduleIdToActivities: Record<number, ActivityToInsert[]> = {
  1: introducaoLGPDActivities,
  2: conceitosBasicosActivities,
  3: operacoesTratamentoActivities,
  4: principiosTratamentoActivities,
  5: inventarioDadosIActivities,
  6: inventarioDadosIIActivities,
  7: cicloVidaDadoActivities,
};

async function checkIfDatabaseHasData() {
  // Verifica se há algum avatar inserido
  const result = await db.select().from(avatars).limit(1);

  // Se houver pelo menos um registro, retorna false (banco tem dados)
  return result.length === 0;
}

export async function runSeed() {
  const isEmpty = await checkIfDatabaseHasData();
  if (!isEmpty) {
    console.log("O banco já possui dados. Seed não será executada.");
    return;
  }

  await db
    .insert(avatars)
    .values([
      { filePath: "avatars/avatar.svg" },
      { filePath: "avatars/avatar_1.svg" },
      { filePath: "avatars/avatar_2.svg" },
      { filePath: "avatars/avatar_3.svg" },
    ]);
  await db.insert(titles).values([{ name: "Aprendiz dos dados pessoais" }]);
  await insertModules();
  await insertActivities();
  await db
    .insert(badgeTypes)
    .values([{ name: "bronze" }, { name: "silver" }, { name: "gold" }]);

  console.log("Executou seed adequadamente");
}

const isManualRun = process.argv[1]?.includes("seed.ts");
if (isManualRun) {
  runSeed().catch((err) => {
    console.error("Erro durante o seeding manual:", err);
    process.exit(1);
  });
}

async function insertModules() {
  // Considera ordem linear de desbloqueio

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

  for (const name of moduleNames) {
    const activities = moduleIdToActivities[(previousModuleId ?? 0) + 1];
    const maxPoints: number = activities
      ? activities.reduce((acc, current) => acc + current.points, 0)
      : 0;

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

  for (const [moduleId, activities] of Object.entries(moduleIdToActivities)) {
    activities.forEach((activity) =>
      insertActivity(activity, Number(moduleId))
    );
  }
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
