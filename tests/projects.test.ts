import request from "supertest";
import setupAcceptanceTest from "./utils/setup-acceptance-test";
import ProjectsRepository from "../src/repositories/ProjectsRepository";
import server from "../src/config/server/server";

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
    const response = await request(server).get("/projects");

    expect(response.status).toBe(200);

    const { body } = response;

    expect(body).toHaveLength(2);

    const ids = body.map((project) => project.id);

    expect(ids).toStrictEqual([1, 3]);
    expect(body[0]).not.toHaveProperty("isPublished");
  });
});
