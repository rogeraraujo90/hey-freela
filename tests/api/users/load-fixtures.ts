import AppTestsDataSource from "@tests/config/database/data-sources";
import emptyTables from "@tests/utils/empty-tables";
import User from "@models/User";

export default function loadFixtures() {
  const { manager: entityManager } = AppTestsDataSource;

  beforeAll(async () => {
    const firstUser = entityManager.create(User, {
      email: "first@test.com",
      password: "123",
    });

    await entityManager.save(firstUser);
  });

  afterAll(async () => emptyTables([User], entityManager));
}
