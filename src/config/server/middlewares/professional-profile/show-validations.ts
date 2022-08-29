import { Request, Response, NextFunction } from "express";
import { param, validationResult } from "express-validator";
import { isNumericMessage } from "../utils/validations-messages";

export default [
  param("id")
    .isInt({ min: 1, allow_leading_zeroes: false })
    .withMessage(isNumericMessage("Id"))
    .toInt(),
  (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      response.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  },
];
