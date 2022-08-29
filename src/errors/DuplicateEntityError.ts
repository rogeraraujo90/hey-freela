import AppError from "@errors/AppError";
import ErrorCodes from "@errors/ErrorCodes";

export default class DuplicateEntityError extends AppError {
  constructor(private entityName: string, private uniqueConstraint: string) {
    super();
  }

  code = ErrorCodes.DUPLICATE_ENTITY_ERROR;

  status = 422;

  title = "Duplication detected";

  get detail(): string {
    return `'${this.entityName}' with the provided '${this.uniqueConstraint}' already exists`;
  }
}
