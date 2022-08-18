/* eslint-disable no-console */
import AppTestsDataSource from "../config/database/data-sources";

async function startDatabaseConnection() {
  try {
    await AppTestsDataSource.initialize();
  } catch (err) {
    console.error(
      "Error during application tests Data Source initialization",
      err
    );
  }
}

export default function setupDatabase() {
  beforeAll(async () => startDatabaseConnection());

  afterAll(async () => {
    await AppTestsDataSource.destroy();
  });
}
