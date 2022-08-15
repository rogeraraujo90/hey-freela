/* eslint-disable no-console */
import server from "./server";

const SERVER_PORT = 3000;

export default function startServer() {
  server.listen(SERVER_PORT, () => {
    console.log(`Example app listening on port ${SERVER_PORT}`);
  });
}
