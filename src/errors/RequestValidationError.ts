import AppError from "@errors/AppError";
import ErrorCodes from "@errors/ErrorCodes";
import { Location } from "express-validator";

export default class RequestValidationError extends AppError {
  constructor(
    private param: string,
    private paramLocation: Location,
    private validationMessage: string
  ) {
    super();
  }

  status = 400;

  code = ErrorCodes.REQUEST_VALIDATOR_ERROR;

  title = "Request pre-conditions check has failed";

  get detail(): string {
    return `Failed validation for '${this.param}' value located at '${this.paramLocation}': ${this.validationMessage}`;
  }
}
