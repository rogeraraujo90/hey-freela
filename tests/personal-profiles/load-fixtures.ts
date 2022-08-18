import AppTestsDataSource from "@tests/config/database/data-sources";
import Language from "@models/Language";
import User from "@models/User";
import ProfessionalProfile from "@models/ProfessionalProfile";

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
    const englishLanguage = entityManager.create(Language, {
      id: 1,
      name: "English",
      globalName: "English",
    });
    const portugueseLanguage = entityManager.create(Language, {
      id: 2,
      name: "Português",
      globalName: "Portuguese",
    });

    await entityManager.save([englishLanguage, portugueseLanguage, user]);
    await entityManager.insert(ProfessionalProfile, [
      {
        id: "1",
        description: "Professional profile 1",
        githubProfile: "https://www.github.com/profile1",
        technologies: ["java", "php"],
        publishedProjects: [
          "https://www.project1.com",
          "https://www.github.com/profile1/project1",
        ],
        language: englishLanguage,
        isPublished: true,
        owner: user,
      },
      {
        id: "2",
        description: "Professional profile 2",
        githubProfile: "https://www.github.com/profile2",
        technologies: ["javascript", "node"],
        publishedProjects: [
          "https://www.project2.com",
          "https://www.github.com/profile2/project2",
        ],
        language: englishLanguage,
        isPublished: false,
        owner: user,
      },
      {
        id: "3",
        description: "Professional profile 3",
        githubProfile: "https://www.github.com/profile3",
        technologies: ["phyton", "go"],
        publishedProjects: [
          "https://www.project3.com",
          "https://www.github.com/profile3/project3",
        ],
        language: portugueseLanguage,
        isPublished: true,
        owner: user,
      },
    ]);
  });

  afterAll(async () => {
    await entityManager.getRepository(ProfessionalProfile).clear();
    await entityManager
      .createQueryBuilder()
      .delete()
      .from(Language)
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
