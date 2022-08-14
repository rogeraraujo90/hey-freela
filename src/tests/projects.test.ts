import setupAcceptanceTest from "./utils/setup-acceptance-test";
import ProjectsRepository from "../repositories/ProjectsRepository";

describe("### Projects API ###", () => {
  setupAcceptanceTest();

  beforeEach(async () => {
    await ProjectsRepository.insert([
      {
        name: "Project 1",
        description: "Project 1 description",
        isPublished: true,
      },
      {
        name: "Project 2",
        description: "Project 2 description",
        isPublished: false,
      },
      {
        name: "Project 3",
        description: "Project 3 description",
        isPublished: true,
      },
    ]);
  });

  afterEach(async () => {
    await ProjectsRepository.clear();
  });

  test("it lists all active projects", async () => {
    const result = await ProjectsRepository.listAllPublished();

    expect(result.length).toBe(2);
  });
});
