import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import {
    createQnaActivity,
    createQnaOption,
} from "../tests/factories/activity.factory";
import {
    getCorrectQnaOptionsByActivityId,
    getQnaDetailsByActivityId,
    getQnaOptionsByActivityIds,
} from "./qna";

describe("QNA Activity Repository - Database Integration Tests", () => {
  describe("getQnaDetailsByActivityId()", () => {
    it("should return the correct isMultiple status for an existing QNA activity", async () => {
      const randomIsMultiple = faker.datatype.boolean();
      const activity = await createQnaActivity(
        {},
        { isMultiple: randomIsMultiple },
      );

      const result = await getQnaDetailsByActivityId(activity.id);

      expect(result).toMatchObject({
        isMultiple: randomIsMultiple,
      });
    });

    it("should return undefined when the activity ID does not exist", async () => {
      const nonExistentId = faker.number.int({ min: 10000, max: 99999 });

      const result = await getQnaDetailsByActivityId(nonExistentId);

      expect(result).toBeUndefined();
    });
  });

  describe("getCorrectQnaOptionsByActivityId()", () => {
    it("should return only the IDs of options marked as correct for a specific activity", async () => {
      const activity = await createQnaActivity();
      const correctOption = await createQnaOption({
        activityId: activity.id,
        isCorrect: true,
      });
      await createQnaOption({
        activityId: activity.id,
        isCorrect: false,
      });

      const results = await getCorrectQnaOptionsByActivityId(activity.id);

      expect(results).toHaveLength(1);
      expect(results[0].id).toBe(correctOption.id);
    });

    it("should return an empty array if no correct options exist for the activity", async () => {
      const activity = await createQnaActivity();
      await createQnaOption({ activityId: activity.id, isCorrect: false });

      const results = await getCorrectQnaOptionsByActivityId(activity.id);

      expect(results).toBeInstanceOf(Array);
      expect(results).toHaveLength(0);
    });

    it("should return an empty array for a non-existent activity ID", async () => {
      const nonExistentId = faker.number.int({ min: 10000, max: 99999 });

      const results = await getCorrectQnaOptionsByActivityId(nonExistentId);

      expect(results).toHaveLength(0);
    });
  });

  describe("getQnaOptionsByActivityIds()", () => {
    it("should return options grouped by activityId for multiple activities", async () => {
      const activity1 = await createQnaActivity();
      const activity2 = await createQnaActivity();
      const option1 = await createQnaOption({ activityId: activity1.id });
      await createQnaOption({ activityId: activity1.id });
      await createQnaOption({ activityId: activity2.id });

      const resultRecord = await getQnaOptionsByActivityIds([
        activity1.id,
        activity2.id,
      ]);

      expect(Object.keys(resultRecord)).toHaveLength(2);
      expect(resultRecord[activity1.id]).toHaveLength(2);
      expect(resultRecord[activity2.id]).toHaveLength(1);
      expect(resultRecord[activity1.id]).toContainEqual(
        expect.objectContaining({
          id: option1.id,
          text: option1.text,
          isCorrect: option1.isCorrect,
        }),
      );
    });

    it("should return an empty record if no activity IDs are provided", async () => {
      const resultRecord = await getQnaOptionsByActivityIds([]);

      expect(resultRecord).toEqual({});
    });

    it("should skip activities that have no options in the final record", async () => {
      const activityWithValues = await createQnaActivity();
      const activityEmpty = await createQnaActivity();
      await createQnaOption({ activityId: activityWithValues.id });

      const resultRecord = await getQnaOptionsByActivityIds([
        activityWithValues.id,
        activityEmpty.id,
      ]);

      expect(resultRecord[activityWithValues.id]).toBeDefined();
      expect(resultRecord[activityEmpty.id]).toBeUndefined();
    });
  });
});
