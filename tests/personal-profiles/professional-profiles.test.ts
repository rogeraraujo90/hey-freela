import request from "supertest";
import server from "@config/server/server";
import setupDatabase from "../utils/setup-database";
import loadFixtures from "./load-fixtures";

setupDatabase();

describe("### Professional Profiles API ###", () => {
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

  test("it returns correct Professional Profile attributes", async () => {
    const response = await request(server).get("/professional-profiles");
    const [professionalProfileAttributes] = response.body;

    expect(professionalProfileAttributes).toHaveProperty("createdDate");
    expect(professionalProfileAttributes).toHaveProperty("updatedDate");

    delete professionalProfileAttributes.createdDate;
    delete professionalProfileAttributes.updatedDate;

    expect(professionalProfileAttributes).toStrictEqual({
      id: "1",
      description: "Professional profile 1",
      githubProfile: "https://www.github.com/profile1",
      technologies: ["java", "php"],
      publishedProjects: [
        "https://www.project1.com",
        "https://www.github.com/profile1/project1",
      ],
    });
  });

  test("it returns a single Professional Profile with the correct attributes", async () => {
    const { body: professionalProfileData, status } = await request(server).get(
      "/professional-profiles/1"
    );

    expect(status).toBe(200);
    expect(professionalProfileData).toHaveProperty("createdDate");
    expect(professionalProfileData).toHaveProperty("updatedDate");
    expect(professionalProfileData).toHaveProperty("owner");

    const { owner: ownerData } = professionalProfileData;

    expect(ownerData).toHaveProperty("createdDate");
    expect(ownerData).toHaveProperty("updatedDate");
    expect(ownerData).toHaveProperty("workingProjects");

    const { workingProjects: workingProjectsData } = ownerData;

    expect(workingProjectsData).toHaveLength(1);

    const [workingProjectData] = workingProjectsData;

    expect(workingProjectData).toHaveProperty("createdDate");
    expect(workingProjectData).toHaveProperty("updatedDate");

    delete professionalProfileData.createdDate;
    delete professionalProfileData.updatedDate;
    delete professionalProfileData.owner;
    delete ownerData.createdDate;
    delete ownerData.updatedDate;
    delete ownerData.workingProjects;
    delete workingProjectData.createdDate;
    delete workingProjectData.updatedDate;

    expect(professionalProfileData).toStrictEqual({
      id: "1",
      description: "Professional profile 1",
      githubProfile: "https://www.github.com/profile1",
      technologies: ["java", "php"],
      publishedProjects: [
        "https://www.project1.com",
        "https://www.github.com/profile1/project1",
      ],
    });

    expect(ownerData).toStrictEqual({
      id: "1",
      email: "john@snow.com",
      firstName: "John",
      lastName: "Snow",
      preferredName: "Aegon",
    });

    expect(workingProjectData).toStrictEqual({
      id: "1",
      name: "Project os Arya",
      description: "I am the arya project description",
      isActive: false,
    });
  });
});
