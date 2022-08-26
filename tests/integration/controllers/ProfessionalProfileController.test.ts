import request from "supertest";
import server from "@config/server/server";

jest.mock("@services/ProfessionalProfileService", () => ({
  getAllPublished: jest.fn().mockImplementation(() => {
    throw new Error();
  }),

  getProfile: jest.fn().mockImplementation(() => {
    throw new Error();
  }),
}));

describe("### ProfessionalProfileController ###", () => {
  test("index pass any error forward to the error-handler", async () => {
    const response = await request(server).get("/professional-profiles");

    expect(response.status).toBe(500);
  });

  test("show pass any error forward to the error-handler", async () => {
    const response = await request(server).get("/professional-profiles/1");

    expect(response.status).toBe(500);
  });
});
