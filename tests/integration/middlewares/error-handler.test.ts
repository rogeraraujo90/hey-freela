import AppError from "@errors/AppError";
import request from "supertest";
import server from "@config/server/server";
import ErrorCodes from "@errors/ErrorCodes";
import expectReturnedErrors from "@tests/utils/expects/expect-returned-errors";
import UnexpectedError from "@errors/UnexpectedError";

const GenericAppError = class extends AppError {
  status = 400;

  code = ErrorCodes.PARSE_ERROR;

  title = "I am the title";

  detail = "I am the detail";
};

jest.mock("@services/ProjectsService", () => ({
  getAllPublished: jest
    .fn()
    .mockImplementationOnce(() => {
      throw new GenericAppError();
    })
    .mockImplementationOnce(() => {
      throw new Error();
    }),
}));

describe("### Error handler middleware ###", () => {
  test("It returns an AppError correctly formatted", async () => {
    const response = await request(server).get("/projects");

    expectReturnedErrors([new GenericAppError()], response);
  });

  test("It returns an unexpected error correctly formatted", async () => {
    const response = await request(server).get("/projects");

    expectReturnedErrors([new UnexpectedError()], response);
  });
});
