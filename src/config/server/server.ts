import express from "express";
import appRoutes from "./routes";

const server = express();

server.use(appRoutes);

export default server;
