import User from "@models/User";
import Project from "@models/Project";
import AppTestsDataSource from "../config/database/data-sources";

export default function loadFixtures() {
  const { manager: entityManager } = AppTestsDataSource;

  beforeAll(async () => {
    const user = entityManager.create(User, {
      id: "1",
      email: "john@snow.com",
      password: "123",
      firstName: "John",
      lastName: "Snow",
      preferredName: "Aegon",
    });

    await entityManager.save(user);
    await entityManager.insert(Project, [
      {
        id: "1",
        name: "Project 1",
        description: "Project 1 description",
        isPublished: true,
        owner: user,
      },
      {
        id: "2",
        name: "Project 2",
        description: "Project 2 description",
        isPublished: false,
        owner: user,
      },
      {
        id: "3",
        name: "Project 3",
        description: "Project 3 description",
        isPublished: true,
        owner: user,
      },
    ]);
  });

  afterAll(async () => {
    await entityManager
      .createQueryBuilder()
      .delete()
      .from(Project)
      .where("true")
      .execute();
    await entityManager
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("true")
      .execute();
  });
}
