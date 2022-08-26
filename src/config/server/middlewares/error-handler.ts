import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import AppError from "@errors/AppError";

export default function errorHandler(
  error: ErrorRequestHandler,
  req: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  if (error instanceof AppError) {
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
    response.status(500).json({
      errors: [
        {
          code: "5001",
          title: "Unexpected error",
          detail:
            "We fall into an error that we didn't expect. We will work to understand and fix it.",
        },
      ],
    });
  }
}
