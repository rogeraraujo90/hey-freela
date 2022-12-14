import "reflect-metadata";
import "dotenv/config";
import "@config/container/data-source";
import "@config/container/providers";
import initDatabaseConnection from "@config/database/init-database-connection";
import startServer from "@config/server/start-server";

initDatabaseConnection();
startServer();
