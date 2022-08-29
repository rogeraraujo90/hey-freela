import ErrorCodes from "@errors/ErrorCodes";
import AppError from "./AppError";

export default class EntityNotFoundError extends AppError {
  constructor(private entityName: string, private entityId: string | number) {
    super();
  }

  status = 404;

  code = ErrorCodes.ENTITY_NOT_FOUND_ERROR;

  title = "Resource not found";

  get detail() {
    return `The requested ${this.entityName} with id ${this.entityId} doesn't exist or you don't have access to see it.`;
  }
}
