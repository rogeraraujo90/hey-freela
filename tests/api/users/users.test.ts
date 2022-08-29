import request from "supertest";
import server from "@config/server/server";

describe("### Users API ###", () => {
  test("It exists", async () => {
    const response = await request(server).post("/users");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({ message: "Coming soon" });
  });
});
