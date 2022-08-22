import AppError from "./AppError";

export default class EntityNotFoundError extends AppError {
  constructor(entityName: string, entityId: string | number) {
    super();

    this.entityName = entityName;
    this.entityId = entityId;
  }

  status = 404;

  code = "40041";

  title = "Resource not found";

  entityName: string;

  entityId: string | number;

  get detail() {
    return `The requested ${this.entityName} with id ${this.entityId} was not found.`;
  }
}
