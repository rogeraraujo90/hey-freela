import express from "express";
import errorHandler from "@config/server/middlewares/error-handler";
import appRoutes from "./routes";

const server = express();

server.disable("x-powered-by");
server.use(express.json());
server.use(appRoutes);
server.use(errorHandler);

export default server;
