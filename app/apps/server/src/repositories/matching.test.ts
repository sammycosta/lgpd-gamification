import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import {
  createActivity,
  createMatchingPair,
} from "../tests/factories/activity.factory";
import { ActivityTypes } from "../types/entities";
import {
  getMatchingPairsByActivityId,
  getMatchingPairsByActivityIds,
} from "./matching";

describe("Matching Activity Repository - Database Integration Tests", () => {
  describe("getMatchingPairsByActivityIds()", () => {
    it("should return matching pairs grouped by activityId for multiple activities", async () => {
      const activity1 = await createActivity({
        typeId: ActivityTypes.MATCHING,
      });
      const activity2 = await createActivity({
        typeId: ActivityTypes.MATCHING,
      });

      const pair1 = await createMatchingPair({ activityId: activity1.id });
      await createMatchingPair({ activityId: activity1.id });
      await createMatchingPair({ activityId: activity2.id });

      const resultRecord = await getMatchingPairsByActivityIds([
        activity1.id,
        activity2.id,
      ]);

      expect(Object.keys(resultRecord)).toHaveLength(2);
      expect(resultRecord[activity1.id]).toHaveLength(2);
      expect(resultRecord[activity2.id]).toHaveLength(1);

      expect(resultRecord[activity1.id]).toContainEqual(
        expect.objectContaining({
          concept: pair1.concept,
          definition: pair1.definition,
        }),
      );
    });

    it("should return an empty record when provided with an empty array of IDs", async () => {
      const result = await getMatchingPairsByActivityIds([]);

      expect(result).toEqual({});
    });

    it("should not include activities that have no associated matching pairs", async () => {
      const activityEmpty = await createActivity({
        typeId: ActivityTypes.MATCHING,
      });
      const activityWithData = await createActivity({
        typeId: ActivityTypes.MATCHING,
      });
      await createMatchingPair({ activityId: activityWithData.id });

      const result = await getMatchingPairsByActivityIds([
        activityEmpty.id,
        activityWithData.id,
      ]);

      expect(result[activityWithData.id]).toBeDefined();
      expect(result[activityEmpty.id]).toBeUndefined();
    });
  });

  describe("getMatchingPairsByActivityId()", () => {
    it("should retrieve all pairs for a single activity with correct fields", async () => {
      const activity = await createActivity({ typeId: ActivityTypes.MATCHING });
      const pair = await createMatchingPair({ activityId: activity.id });

      const results = await getMatchingPairsByActivityId(activity.id);

      expect(results).toHaveLength(1);
      expect(results[0]).toEqual({
        concept: pair.concept,
        definition: pair.definition,
      });
      expect(results[0]).not.toHaveProperty("id");
    });

    it("should return an empty array if the activity ID does not exist", async () => {
      const nonExistentId = faker.number.int({ min: 10000, max: 99999 });

      const results = await getMatchingPairsByActivityId(nonExistentId);

      expect(results).toEqual([]);
    });
  });
});
