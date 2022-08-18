import ProjectsRepository from "@repositories/ProjectsRepository";

export default function loadFixtures() {
  beforeAll(async () => {
    await ProjectsRepository.insert([
      {
        id: "1",
        name: "Project 1",
        description: "Project 1 description",
        isPublished: true,
      },
      {
        id: "2",
        name: "Project 2",
        description: "Project 2 description",
        isPublished: false,
      },
      {
        id: "3",
        name: "Project 3",
        description: "Project 3 description",
        isPublished: true,
      },
    ]);
  });

  afterAll(async () => {
    await ProjectsRepository.clear();
  });
}
