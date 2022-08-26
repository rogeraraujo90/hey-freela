import request from "supertest";
import server from "@config/server/server";

jest.mock("@services/ProjectsService", () => ({
  getAllPublished: jest.fn().mockImplementation(() => {
    throw new Error();
  }),
}));

describe("### ProjectsController ###", () => {
  test("index pass any error forward to the error-handler", async () => {
    const response = await request(server).get("/projects");

    expect(response.status).toBe(500);
  });
});
