import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import {
    createActivity,
    createQnaActivity,
} from "../tests/factories/activity.factory";
import { createModule } from "../tests/factories/module.factory";
import {
    createUser,
    createUserActivity,
} from "../tests/factories/user.factory";
import { getActivitiesByModuleId, getActivityById } from "./activity";

describe("Activity Repository - Database Integration Tests", () => {
  describe("getActivityById()", () => {
    it("should retrieve a specific activity by its ID and match all returned fields", async () => {
      const activity = await createActivity();

      const result = await getActivityById(activity.id);

      expect(result).toMatchObject({
        id: activity.id,
        moduleId: activity.moduleId,
        points: activity.points,
        typeId: activity.typeId,
      });
    });

    it("should return undefined when the activity ID does not exist in the database", async () => {
      const nonExistentId = faker.number.int({ min: 10000, max: 99999 });

      const result = await getActivityById(nonExistentId);

      expect(result).toBeUndefined();
    });
  });

  describe("getActivitiesByModuleId()", () => {
    it("should return a single activity with all fields matching when exactly one exists", async () => {
      const user = await createUser();
      const module = await createModule();
      const activity = await createQnaActivity({ moduleId: module.id });

      const results = await getActivitiesByModuleId(user.id, module.id);

      expect(results).toHaveLength(1);
      expect(results[0]).toMatchObject({
        id: activity.id,
        name: activity.name,
        typeId: activity.typeId,
        points: activity.points,
        isCorrect: null,
      });
      expect(results[0].question).toBeDefined();
    });

    it("should match all fields including randomized user completion status", async () => {
      const user = await createUser();
      const module = await createModule();
      const activity = await createQnaActivity({ moduleId: module.id });
      const userActivity = await createUserActivity({
        userId: user.id,
        activityId: activity.id,
      });

      const results = await getActivitiesByModuleId(user.id, module.id);

      expect(results).toHaveLength(1);
      expect(results[0]).toMatchObject({
        id: activity.id,
        name: activity.name,
        typeId: activity.typeId,
        points: activity.points,
        isCorrect: userActivity.isCorrect,
        question: expect.any(String),
        isMultiple: expect.any(Boolean),
      });
    });

    it("should return multiple distinct activities for the same module", async () => {
      const user = await createUser();
      const module = await createModule();
      const act1 = await createActivity({ moduleId: module.id });
      const act2 = await createActivity({ moduleId: module.id });

      const results = await getActivitiesByModuleId(user.id, module.id);

      expect(results).toHaveLength(2);
      const ids = results.map((r) => r.id);
      expect(ids).toContain(act1.id);
      expect(ids).toContain(act2.id);
    });

    it("should isolate user completion status (isCorrect should be null for other users)", async () => {
      const userA = await createUser();
      const userB = await createUser();
      const module = await createModule();
      const activity = await createActivity({ moduleId: module.id });
      await createUserActivity({
        userId: userA.id,
        activityId: activity.id,
      });

      const results = await getActivitiesByModuleId(userB.id, module.id);

      expect(results).toHaveLength(1);
      expect(results[0].id).toBe(activity.id);
      expect(results[0].isCorrect).toBeNull();
    });

    it("should return null for question and isMultiple when activity is not QNA", async () => {
      const user = await createUser();
      const module = await createModule();
      // Create a generic activity (which defaults to a non-QnA type usually, or we can force it)
      // The factory setup uses random types, but let's ensure it's not QNA if possible or just check the fields if it happens to be non-connected.
      // Actually, createActivity makes an activity row but NO qnaDetails row unless createQnaActivity is used.
      // So even if typeId is QNA, if no qnaDetails row exists, the left join should be null.
      const activity = await createActivity({ moduleId: module.id });

      const results = await getActivitiesByModuleId(user.id, module.id);

      expect(results).toHaveLength(1);
      expect(results[0].question).toBeNull();
      expect(results[0].isMultiple).toBeNull();
    });
  });
});
