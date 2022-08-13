/* eslint-disable no-console */
import AppDataSource from "./data-sources";

export default function initDatabaseConnection() {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}
