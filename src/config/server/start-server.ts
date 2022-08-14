/* eslint-disable no-console */
import express from "express";
import appRoutes from "./routes";

const SERVER_PORT = 3000;

export default function startServer() {
  const app = express();

  app.use(appRoutes);

  app.listen(SERVER_PORT, () => {
    console.log(`Example app listening on port ${SERVER_PORT}`);
  });
}
