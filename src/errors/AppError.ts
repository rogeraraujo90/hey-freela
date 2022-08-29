import ErrorCodes from "@errors/ErrorCodes";

export default abstract class AppError {
  abstract status: number;

  abstract code: ErrorCodes;

  abstract title: string;

  abstract get detail(): string;
}
