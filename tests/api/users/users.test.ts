import AppTestsDataSource from "@tests/config/database/data-sources";
import request from "supertest";
import server from "@config/server/server";
import setupDatabase from "@tests/utils/setup-database";
import { VALID_CREATE_USER_FORM_DATA } from "@tests/utils/constants";
import expectReturnedErrors from "@tests/utils/expects/expect-returned-errors";
import DuplicateEntityError from "@errors/DuplicateEntityError";
import { container } from "tsyringe";
import IHashProvider from "@providers/hash/IHashProvider";
import User from "@models/User";
import loadFixtures from "./load-fixtures";

setupDatabase();

describe("### Users API ###", () => {
  loadFixtures();

  test("It creates a user with required params", async () => {
    const hasProvider = container.resolve<IHashProvider>("HashProvider");
    const hashProviderSpy = jest.spyOn(hasProvider, "getHash");
    const hashedPassword = "hashed-password";

    hashProviderSpy.mockReturnValueOnce(Promise.resolve(hashedPassword));

    const response = await request(server)
      .post("/users")
      .send(VALID_CREATE_USER_FORM_DATA);

    expect(response.status).toBe(201);
    expect(hashProviderSpy).toHaveBeenCalledTimes(1);

    const { body: newUserAttributes } = response;

    expect(newUserAttributes).toHaveProperty("id");
    expect(newUserAttributes).toHaveProperty("createdDate");
    expect(newUserAttributes).toHaveProperty("updatedDate");

    const persistedUser = await AppTestsDataSource.manager.findOneBy(User, {
      id: newUserAttributes.id,
    });

    expect(persistedUser.password).toBe(hashedPassword);

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

  test("It creates a user with all params", async () => {
    const johnUserProps = {
      email: "john@email.com",
      firstName: "John",
      lastName: "Snow",
      preferredName: "John Send",
    };
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        ...johnUserProps,
      });

    expect(response.status).toBe(201);

    const { body: newUserAttributes } = response;

    delete newUserAttributes.id;
    delete newUserAttributes.createdDate;
    delete newUserAttributes.updatedDate;

    expect(newUserAttributes).toStrictEqual(johnUserProps);
  });

  test("It returns an error if trying to create a user with an existing email", async () => {
    const response = await request(server)
      .post("/users")
      .send({ ...VALID_CREATE_USER_FORM_DATA, email: "first@test.com" });

    expectReturnedErrors([new DuplicateEntityError("User", "email")], response);
  });
});
