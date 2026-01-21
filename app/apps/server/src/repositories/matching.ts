import { eq, inArray } from "drizzle-orm";
import { db } from "../db";
import { matchingPairs } from "../db/schema";

export async function getMatchingPairsByActivityIds(activityIds: number[]) {
  const rows = await db
    .select({
      id: matchingPairs.id, //Ver depois se é necessário em algum momento
      activityId: matchingPairs.activityId,
      concept: matchingPairs.concept,
      definition: matchingPairs.definition,
    })
    .from(matchingPairs)
    .where(inArray(matchingPairs.activityId, activityIds))
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

export async function getMatchingPairsByActivityId(activityId: number) {
  return db
    .select({
      concept: matchingPairs.concept,
      definition: matchingPairs.definition,
    })
    .from(matchingPairs)
    .where(eq(matchingPairs.activityId, activityId))
    .all();
}
