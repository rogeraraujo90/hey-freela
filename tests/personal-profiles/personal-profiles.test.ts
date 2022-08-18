import request from "supertest";
import server from "../../src/config/server/server";
import setupAcceptanceTest from "../utils/setup-acceptance-test";
import setupTest from "./setup";

describe("### Personal Profiles API ###", () => {
  setupAcceptanceTest();
  setupTest();

  test("it lists all active professional profiles", async () => {
    const response = await request(server).get("/professional-profiles");

    expect(response.status).toBe(200);

    const { body } = response;

    expect(body).toHaveLength(2);

    const ids = body.map(({ id }) => id);

    expect(ids).toStrictEqual(["1", "3"]);
    expect(body[0]).not.toHaveProperty(["isPublished", "language"]);
  });
});
