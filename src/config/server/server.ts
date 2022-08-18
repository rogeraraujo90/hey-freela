import express from "express";
import errorHandler from "@config/server/middlewares/error-handler";
import appRoutes from "./routes";

const server = express();

server.use(appRoutes);
server.use(errorHandler);

export default server;
