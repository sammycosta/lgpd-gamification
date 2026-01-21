import { and, eq, inArray } from "drizzle-orm";
import { db } from "../db";
import { qnaDetails, qnaOptions } from "../db/schema";

export async function getQnaDetailsByActivityId(activityId: number) {
  return db
    .select({ isMultiple: qnaDetails.isMultiple })
    .from(qnaDetails)
    .where(eq(qnaDetails.activityId, activityId))
    .get();
}

export async function getCorrectQnaOptionsByActivityId(activityId: number) {
  return db
    .select({ id: qnaOptions.id })
    .from(qnaOptions)
    .where(and(eq(qnaOptions.activityId, activityId), qnaOptions.isCorrect))
    .all();
}

export async function getQnaOptionsByActivityIds(activityIds: number[]) {
  const rows = await db
    .select({
      id: qnaOptions.id,
      activityId: qnaOptions.activityId,
      text: qnaOptions.text,
      isCorrect: qnaOptions.isCorrect,
    })
    .from(qnaOptions)
    .where(inArray(qnaOptions.activityId, activityIds))
    .all();

  return rows.reduce(
    (acc, row) => {
      if (!acc[row.activityId]) {
        acc[row.activityId] = [];
      }
      acc[row.activityId].push(row);
      return acc;
    },
    {} as Record<number, typeof rows>,
  );
}
