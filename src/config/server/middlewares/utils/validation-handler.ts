import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import RequestValidationError from "@errors/RequestValidationError";
import parseAppError from "./parse-app-error";

export default function validationHandler(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    const validationErrors = errors.array();
    const applicationErrors = validationErrors.map(({ param, location, msg }) =>
      parseAppError(new RequestValidationError(param, location, msg))
    );

    response.status(400).json({ errors: applicationErrors });
  } else {
    next();
  }
}
