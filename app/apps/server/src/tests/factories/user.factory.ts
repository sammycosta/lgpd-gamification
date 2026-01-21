import { faker } from "@faker-js/faker";
import { randomUUID } from "node:crypto";
import { db } from "../../db";
import { userActivities, users } from "../../db/schema";

export async function createUser(
  overrides: Partial<typeof users.$inferInsert> = {},
) {
  const uuid = randomUUID();

  const [inserted] = await db
    .insert(users)
    .values({
      id: uuid,
      name: `User_${uuid.slice(0, 8)}`,
      email: `test-${uuid.slice(0, 8)}@example.com`,
      ...overrides,
    })
    .returning();

  return inserted;
}

export async function createUserActivity(
  overrides: Partial<typeof userActivities.$inferInsert> & {
    userId: string;
    activityId: number;
  },
) {
  const [inserted] = await db
    .insert(userActivities)
    .values({
      isCorrect: faker.datatype.boolean(),
      ...overrides,
    })
    .returning();

  return inserted;
}
