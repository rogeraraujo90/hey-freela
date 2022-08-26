import AppError from "@errors/AppError";
import ErrorCodes from "@errors/ErrorCodes";

export default class ParseError extends AppError {
  constructor(private parsedValue: unknown) {
    super();
  }

  status = 400;

  code = ErrorCodes.PARSE_ERROR;

  title = "Parse error";

  get detail() {
    return `Error parsing value ${this.parsedValue}`;
  }
}
