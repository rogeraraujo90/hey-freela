export default abstract class AppError {
  status: number;

  code: string;

  title: string;

  abstract get detail(): string;
}
