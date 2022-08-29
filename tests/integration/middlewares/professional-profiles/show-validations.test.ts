import request from "supertest";
import server from "@config/server/server";
import expectReturnedErrors from "@tests/utils/expects/expect-returned-errors";
import { isNumericMessage } from "@config/server/middlewares/utils/validations-messages";
import RequestValidationError from "@errors/RequestValidationError";

describe("### Show Professional Profiles validations middleware ###", () => {
  test("It validates id param is numeric", async () => {
    const response = await request(server).get("/professional-profiles/a");

    expectReturnedErrors(
      [new RequestValidationError("id", "params", isNumericMessage("id"))],
      response
    );
  });
});
