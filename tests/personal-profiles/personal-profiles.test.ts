import request from "supertest";
import server from "@config/server/server";
import setupDatabase from "../utils/setup-database";
import loadFixtures from "./load-fixtures";

setupDatabase();

describe("### Personal Profiles API ###", () => {
  loadFixtures();

  test("it lists all active professional profiles", async () => {
    const response = await request(server).get("/professional-profiles");

    expect(response.status).toBe(200);

    const { body } = response;

    expect(body).toHaveLength(2);

    const ids = body.map(({ id }: { id: string }) => id);

    expect(ids).toStrictEqual(["1", "3"]);
  });

  test("it filters active professional profiles by language", async () => {
    const response = await request(server).get(
      "/professional-profiles?language=2"
    );

    expect(response.status).toBe(200);

    const { body } = response;

    expect(body).toHaveLength(1);
    expect(body[0].id).toBe("3");
  });

  test("it returns an empty array if language doesn't exists", async () => {
    const response = await request(server).get(
      "/professional-profiles?language=3"
    );

    expect(response.status).toBe(200);

    const { body } = response;

    expect(body).toHaveLength(0);
  });

  test("it returns correct Personal Profile attributes", async () => {
    const response = await request(server).get("/professional-profiles");
    const [personalProfileAttributes] = response.body;

    expect(personalProfileAttributes).toHaveProperty("createdDate");
    expect(personalProfileAttributes).toHaveProperty("updatedDate");

    delete personalProfileAttributes.createdDate;
    delete personalProfileAttributes.updatedDate;

    expect(personalProfileAttributes).toStrictEqual({
      id: "1",
      description: "Personal profile 1",
      githubProfile: "https://www.github.com/profile1",
      technologies: ["java", "php"],
      publishedProjects: [
        "https://www.project1.com",
        "https://www.github.com/profile1/project1",
      ],
    });
  });
});
