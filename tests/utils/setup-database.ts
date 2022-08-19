/* eslint-disable no-console */
import AppTestsDataSource from "../config/database/data-sources";

async function startDatabaseConnection() {
  try {
    await AppTestsDataSource.initialize();
    return;
  } catch (error) {
    console.error(
      "Error during application tests Data Source initialization",
      error
    );
    throw error;
  }
}

export default function setupDatabase() {
  beforeAll(async () => startDatabaseConnection());

  afterAll(async () => AppTestsDataSource.destroy());
}
