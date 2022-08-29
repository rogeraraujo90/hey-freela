import request from "supertest";
import server from "@config/server/server";
import { VALID_CREATE_USER_FORM_DATA } from "@tests/utils/constants";

jest.mock("@services/UserService", () => ({
  create: jest.fn().mockImplementation(() => {
    throw new Error();
  }),
}));

describe("### UserController ###", () => {
  test("create pass any error forward to the error-handler", async () => {
    const response = await request(server)
      .post("/users")
      .send(VALID_CREATE_USER_FORM_DATA);

    expect(response.status).toBe(500);
  });
});
