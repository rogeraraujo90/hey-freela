/* eslint-disable no-console */
import express from "express";

const SERVER_PORT = 3000;

export default function startServer() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(SERVER_PORT, () => {
    console.log(`Example app listening on port ${SERVER_PORT}`);
  });
}
