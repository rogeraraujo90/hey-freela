import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import BaseError from "@errors/BaseError";

export default function errorHandler(
  error: ErrorRequestHandler,
  req: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof BaseError) {
    const { status, code, title, detail } = error;

    response.status(status).json({
      errors: [
        {
          code,
          title,
          detail,
        },
      ],
    });
  } else {
    next(error);
  }
}
