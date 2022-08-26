import ErrorCodes from "@errors/ErrorCodes";

export default abstract class AppError {
  status: number;

  code: ErrorCodes;

  title: string;

  abstract get detail(): string;
}
