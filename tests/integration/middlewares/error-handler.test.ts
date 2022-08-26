import AppError from "@errors/AppError";
import request from "supertest";
import server from "@config/server/server";
import ErrorCodes from "@errors/ErrorCodes";

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

    expect(response.status).toBe(400);
    expect(response.body).toStrictEqual({
      errors: [
        {
          code: ErrorCodes.PARSE_ERROR,
          title: "I am the title",
          detail: "I am the detail",
        },
      ],
    });
  });

  test("It returns an unexpected error correctly formatted", async () => {
    const response = await request(server).get("/projects");

    expect(response.status).toBe(500);
    expect(response.body).toStrictEqual({
      errors: [
        {
          code: "5001",
          title: "Unexpected error",
          detail:
            "We fall into an error that we didn't expect. We will work to understand and fix it.",
        },
      ],
    });
  });
});
