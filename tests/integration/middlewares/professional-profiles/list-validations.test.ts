import request from "supertest";
import server from "@config/server/server";
import expectReturnedErrors from "@tests/utils/expects/expect-returned-errors";
import {
  isAlphaMessage,
  isNumericMessage,
  notEmptyMessage,
} from "@config/server/middlewares/utils/validations-messages";
import RequestValidationError from "@errors/RequestValidationError";

describe("### List Professional Profiles validations middleware ###", () => {
  test("It validates language param is numeric", async () => {
    const response = await request(server).get(
      "/professional-profiles?language=a"
    );

    expectReturnedErrors(
      [
        new RequestValidationError(
          "language",
          "query",
          isNumericMessage("language")
        ),
      ],
      response
    );
  });

  test("It validates technologies param is not empty", async () => {
    const response = await request(server).get(
      "/professional-profiles?technologies="
    );

    expectReturnedErrors(
      [
        new RequestValidationError(
          "technologies",
          "query",
          notEmptyMessage("technologies")
        ),
        new RequestValidationError(
          "technologies",
          "query",
          isAlphaMessage("technologies")
        ),
      ],
      response
    );
  });

  test("It validates technologies param only contains letters", async () => {
    const response = await request(server).get(
      "/professional-profiles?technologies=Python4"
    );

    expectReturnedErrors(
      [
        new RequestValidationError(
          "technologies",
          "query",
          isAlphaMessage("technologies")
        ),
      ],
      response
    );
  });

  test("It validates array of technologies param", async () => {
    const response = await request(server).get(
      "/professional-profiles?technologies=javascript&technologies="
    );

    expectReturnedErrors(
      [
        new RequestValidationError(
          "technologies[1]",
          "query",
          notEmptyMessage("technologies")
        ),
        new RequestValidationError(
          "technologies[1]",
          "query",
          isAlphaMessage("technologies")
        ),
      ],
      response
    );
  });
});
