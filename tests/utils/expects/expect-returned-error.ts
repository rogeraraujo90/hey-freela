import { Response } from "superagent";
import AppError from "@errors/AppError";

export default function expectReturnedError(
  error: AppError,
  response: Response
) {
  const { body, status } = response;

  expect(status).toBe(error.status);
  expect(body).toStrictEqual({
    errors: [
      {
        code: error.code,
        title: error.title,
        detail: error.detail,
      },
    ],
  });
}
