import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export default function validationHandler(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    response.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
}
