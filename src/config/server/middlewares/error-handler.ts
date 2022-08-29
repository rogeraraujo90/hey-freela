/* eslint-disable @typescript-eslint/no-unused-vars, no-console */
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import AppError from "@errors/AppError";
import UnexpectedError from "@errors/UnexpectedError";
import parseAppError from "@config/server/middlewares/utils/parse-app-error";

export default function errorHandler(
  error: ErrorRequestHandler,
  req: Request,
  response: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }

  const sentError = error instanceof AppError ? error : new UnexpectedError();

  response.status(sentError.status).json({
    errors: [parseAppError(sentError)],
  });
}
