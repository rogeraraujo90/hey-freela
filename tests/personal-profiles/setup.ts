import PersonalProfileRepository from "@repositories/PrefessionalProfileRepository";
import AppTestsDataSource from "@tests/config/database/data-sources";
import Language from "@models/Language";

export default function setupTest() {
  const { manager: entityManager } = AppTestsDataSource;

  beforeEach(async () => {
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

    await entityManager.save([englishLanguage, portugueseLanguage]);
    await PersonalProfileRepository.insert([
      {
        id: "1",
        description: "Personal profile 1",
        githubProfile: "https://www.github.com/profile1",
        technologies: ["java", "php"],
        publishedProjects: [
          "https://www.project1.com",
          "https://www.github.com/profile1/project1",
        ],
        language: englishLanguage,
        isPublished: true,
      },
      {
        id: "2",
        description: "Personal profile 2",
        githubProfile: "https://www.github.com/profile2",
        technologies: ["javascript", "node"],
        publishedProjects: [
          "https://www.project2.com",
          "https://www.github.com/profile2/project2",
        ],
        language: englishLanguage,
        isPublished: false,
      },
      {
        id: "3",
        description: "Personal profile 3",
        githubProfile: "https://www.github.com/profile3",
        technologies: ["phyton", "go"],
        publishedProjects: [
          "https://www.project3.com",
          "https://www.github.com/profile3/project3",
        ],
        language: portugueseLanguage,
        isPublished: true,
      },
    ]);
  });

  afterEach(async () => {
    await PersonalProfileRepository.clear();
    // await entityManager.clear(Language);
  });
}
