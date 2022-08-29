import { Response } from "superagent";
import AppError from "@errors/AppError";
import parseAppError from "@config/server/middlewares/utils/parse-app-error";

export default function expectReturnedErrors(
  errors: AppError[],
  response: Response
) {
  const { body, status } = response;
  const parsedErrors = errors.map((e) => parseAppError(e));

  expect(status).toBe(errors[0].status);
  expect(body).toStrictEqual({ errors: [...parsedErrors] });
}
