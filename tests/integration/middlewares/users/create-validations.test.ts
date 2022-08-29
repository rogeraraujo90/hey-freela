import request from "supertest";
import server from "@config/server/server";
import expectReturnedErrors from "@tests/utils/expects/expect-returned-errors";
import {
  areEqualMessage,
  existsMessage,
  isEmailMessage,
  isStrongPasswordMessage,
  notEmptyMessage,
} from "@config/server/middlewares/utils/validations-messages";
import RequestValidationError from "@errors/RequestValidationError";
import { VALID_CREATE_USER_FORM_DATA } from "@tests/utils/constants";

describe("### Create Users validations middleware ###", () => {
  test("It validates email, password, and passwordConfirmation presence", async () => {
    const response = await request(server).post("/users");

    expectReturnedErrors(
      [
        new RequestValidationError("email", "body", existsMessage("email")),
        new RequestValidationError(
          "password",
          "body",
          existsMessage("password")
        ),
        new RequestValidationError(
          "passwordConfirmation",
          "body",
          existsMessage("passwordConfirmation")
        ),
      ],
      response
    );
  });

  test("It validates email is valid", async () => {
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        email: "invalid@mail",
      });

    expectReturnedErrors(
      [new RequestValidationError("email", "body", isEmailMessage("email"))],
      response
    );
  });

  test("It validates password strength", async () => {
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        password: "123",
        passwordConfirmation: "123",
      });

    expectReturnedErrors(
      [
        new RequestValidationError(
          "password",
          "body",
          isStrongPasswordMessage("password")
        ),
      ],
      response
    );
  });

  test("It validates passwordConfirmation is equal to password", async () => {
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        passwordConfirmation: "123",
      });

    expectReturnedErrors(
      [
        new RequestValidationError(
          "passwordConfirmation",
          "body",
          areEqualMessage("passwordConfirmation", "password")
        ),
      ],
      response
    );
  });

  test("It validates firstName is not empty", async () => {
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        firstName: "",
      });

    expectReturnedErrors(
      [
        new RequestValidationError(
          "firstName",
          "body",
          notEmptyMessage("firstName, lastName, and preferredName")
        ),
      ],
      response
    );
  });

  test("It validates lastName is not empty", async () => {
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        lastName: null,
      });

    expectReturnedErrors(
      [
        new RequestValidationError(
          "lastName",
          "body",
          notEmptyMessage("firstName, lastName, and preferredName")
        ),
      ],
      response
    );
  });

  test("It validates preferredName is not empty", async () => {
    const response = await request(server)
      .post("/users")
      .send({
        ...VALID_CREATE_USER_FORM_DATA,
        preferredName: "   ",
      });

    expectReturnedErrors(
      [
        new RequestValidationError(
          "preferredName",
          "body",
          notEmptyMessage("firstName, lastName, and preferredName")
        ),
      ],
      response
    );
  });
});
