import request from "supertest";
import server from "@config/server/server";
import setupDatabase from "@tests/utils/setup-database";
import { VALID_CREATE_USER_FORM_DATA } from "@tests/utils/constants";
import expectReturnedErrors from "@tests/utils/expects/expect-returned-errors";
import DuplicateEntityError from "@errors/DuplicateEntityError";
import loadFixtures from "./load-fixtures";

setupDatabase();

describe("### Users API ###", () => {
  loadFixtures();

  test("It creates a user with required params", async () => {
    const response = await request(server)
      .post("/users")
      .send(VALID_CREATE_USER_FORM_DATA);

    expect(response.status).toBe(201);

    const { body: newUserAttributes } = response;

    expect(newUserAttributes).toHaveProperty("id");
    expect(newUserAttributes).toHaveProperty("createdDate");
    expect(newUserAttributes).toHaveProperty("updatedDate");

    delete newUserAttributes.id;
    delete newUserAttributes.createdDate;
    delete newUserAttributes.updatedDate;

    expect(newUserAttributes).toStrictEqual({
      email: VALID_CREATE_USER_FORM_DATA.email,
      firstName: null,
      lastName: null,
      preferredName: null,
    });
  });

  test("It returns an error if trying to create a user with an existing email", async () => {
    const response = await request(server)
      .post("/users")
      .send({ ...VALID_CREATE_USER_FORM_DATA, email: "first@test.com" });

    expectReturnedErrors([new DuplicateEntityError("User", "email")], response);
  });
});
