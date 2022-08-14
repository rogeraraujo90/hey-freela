/* eslint-disable no-console */
import AppTestsDataSource from "./data-sources";

export default function initDatabaseConnection() {
  AppTestsDataSource.initialize()
    .then(() => {
      console.log("Application tests Data Source has been initialized!");
    })
    .catch((err) => {
      console.error(
        "Error during application tests Data Source initialization",
        err
      );
    });
}
