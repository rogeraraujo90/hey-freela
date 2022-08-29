import AppError from "@errors/AppError";
import ErrorCodes from "@errors/ErrorCodes";

export default class UnexpectedError extends AppError {
  status = 500;

  code = ErrorCodes.UNEXPECTED_ERROR;

  title = "Unexpected error";

  detail =
    "We fall into an error that we didn't expect. We will work to understand and fix it.";
}
