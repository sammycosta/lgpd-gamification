import { faker } from "@faker-js/faker";
import { describe, expect, it } from "vitest";
import {
  createModule,
  createUserModule,
} from "../tests/factories/module.factory";
import { createUser } from "../tests/factories/user.factory";
import {
  getDependentModule,
  getModuleById,
  getModulesByUserId,
} from "./module";

describe("Module Repository - Database Integration Tests", () => {
  describe("getModulesByUserId()", () => {
    it("should return modules with user specific points and progress", async () => {
      const user = await createUser();
      const module = await createModule({ maxPoints: 100 });
      const userModule = await createUserModule({
        userId: user.id,
        moduleId: module.id,
        points: faker.number.int({ min: 1, max: 99 }),
      });

      const results = await getModulesByUserId(user.id);

      const foundModule = results.find((r) => r.id === module.id);
      expect(foundModule).toMatchObject({
        id: module.id,
        name: module.name,
        maxPoints: module.maxPoints,
        userModulesId: userModule.id,
        points: userModule.points,
      });
    });

    it("should return module details with null user progress if user has not started module", async () => {
      const user = await createUser();
      const module = await createModule();

      const results = await getModulesByUserId(user.id);

      const foundModule = results.find((r) => r.id === module.id);
      expect(foundModule).toBeDefined();
      expect(foundModule!.userModulesId).toBeNull();
      expect(foundModule!.points).toBeNull();
    });

    it("should isolate user progress (points should be null for a user who hasn't started, even if another user has)", async () => {
      const userA = await createUser();
      const userB = await createUser();
      const module = await createModule();

      await createUserModule({
        userId: userA.id,
        moduleId: module.id,
      });

      const results = await getModulesByUserId(userB.id);

      const foundModule = results.find((r) => r.id === module.id);
      expect(foundModule?.points).toBeNull();
    });

    it("should return modules ordered by their ID", async () => {
      const user = await createUser();
      await createModule();
      await createModule();

      const results = await getModulesByUserId(user.id);

      const isSorted = results.every(
        (val, i, arr) => !i || arr[i - 1].id <= val.id,
      );
      expect(isSorted).toBe(true);
    });
  });

  describe("getModuleById()", () => {
    it("should return module details with user progress and dependent module info", async () => {
      const user = await createUser();
      const currentModule = await createModule();
      const futureModule = await createModule({
        requiredModuleId: currentModule.id,
      });
      const userModule = await createUserModule({
        userId: user.id,
        moduleId: currentModule.id,
        points: faker.number.int({ min: 1, max: 100 }),
      });

      const result = await getModuleById(user.id, currentModule.id);

      expect(result).toMatchObject({
        id: currentModule.id,
        userModulesId: userModule.id,
        points: userModule.points,
        dependentModuleId: futureModule.id,
      });
    });

    it("should return undefined if module does not exist", async () => {
      const user = await createUser();
      const nonExistentId = faker.number.int({ min: 10000, max: 99999 });

      const result = await getModuleById(user.id, nonExistentId);

      expect(result).toBeUndefined();
    });
  });

  describe("getDependentModule()", () => {
    it("should return the module that requires the given module", async () => {
      const module1 = await createModule();
      const module2 = await createModule({ requiredModuleId: module1.id });

      const result = await getDependentModule(module1.id);

      expect(result).toBeDefined();
      expect(result!.id).toBe(module2.id);
    });

    it("should return undefined if no module requires the given module", async () => {
      const module1 = await createModule();

      const result = await getDependentModule(module1.id);

      expect(result).toBeUndefined();
    });
  });
});
