import { faker } from "@faker-js/faker";
import { db } from "../../db";
import {
  activities,
  matchingPairs,
  qnaDetails,
  qnaOptions,
} from "../../db/schema";
import { ActivityTypes } from "../../types/entities";
import { createModule } from "./module.factory";

export async function createActivity(
  overrides: Partial<typeof activities.$inferInsert> = {},
) {
  const moduleId = overrides.moduleId ?? (await createModule()).id;

  const allTypes = Object.values(ActivityTypes).filter(
    (v) => typeof v === "number",
  ) as number[];
  const randomType = allTypes[Math.floor(Math.random() * allTypes.length)];

  const [inserted] = await db
    .insert(activities)
    .values({
      name: faker.commerce.productName(),
      moduleId,
      typeId: randomType,
      points: faker.number.int({ min: 10, max: 100 }),
      ...overrides,
    })
    .returning();

  return inserted;
}

export async function createQnaActivity(
  activityOverrides: Partial<typeof activities.$inferInsert> = {},
  detailOverrides: Partial<typeof qnaDetails.$inferInsert> = {},
) {
  const activity = await createActivity({
    ...activityOverrides,
    typeId: ActivityTypes.QNA,
  });

  const randomQuestion = faker.lorem.sentence().replace(/\.$/, "?");
  const randomIsMultiple = faker.datatype.boolean();

  await db.insert(qnaDetails).values({
    activityId: activity.id,
    question: randomQuestion,
    isMultiple: randomIsMultiple,
    ...detailOverrides,
  });

  return activity;
}

export async function createQnaOption(
  overrides: Partial<typeof qnaOptions.$inferInsert> & { activityId: number },
) {
  const [inserted] = await db
    .insert(qnaOptions)
    .values({
      text: faker.lorem.sentence(),
      isCorrect: false,
      ...overrides,
    })
    .returning();

  return inserted;
}

export async function createMatchingPair(
  overrides: Partial<typeof matchingPairs.$inferInsert> & {
    activityId: number;
  },
) {
  const [inserted] = await db
    .insert(matchingPairs)
    .values({
      concept:
        faker.commerce.productAdjective() + " " + faker.commerce.product(),
      definition: faker.lorem.sentence(),
      ...overrides,
    })
    .returning();

  return inserted;
}
