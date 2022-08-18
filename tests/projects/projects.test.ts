import request from "supertest";
import server from "../../src/config/server/server";
import setupDatabase from "../utils/setup-database";
import loadFixtures from "./load-fixtures";
import Project from "../../src/models/Project";

setupDatabase();

describe("### Projects API ###", () => {
  loadFixtures();

  test("it lists all active projects", async () => {
    const response = await request(server).get("/projects");

    expect(response.status).toBe(200);

    const { body } = response;

    expect(body).toHaveLength(2);

    const ids = body.map((project: Project) => project.id);

    expect(ids).toStrictEqual(["1", "3"]);
    expect(body[0]).not.toHaveProperty("isPublished");
  });

  test("it returns correct project attributes", async () => {
    const response = await request(server).get("/projects");
    const [projectAttributes] = response.body;

    expect(projectAttributes).toHaveProperty("createdDate");
    expect(projectAttributes).toHaveProperty("updatedDate");

    delete projectAttributes.createdDate;
    delete projectAttributes.updatedDate;

    expect(projectAttributes).toStrictEqual({
      id: "1",
      name: "Project 1",
      description: "Project 1 description",
    });
  });
});
