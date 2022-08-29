import { Request, Response, NextFunction } from "express";
import { query, validationResult } from "express-validator";
import {
  isAlphaMessage,
  isNumericMessage,
  notEmptyMessage,
} from "../utils/validations-messages";

export default [
  query("language")
    .optional()
    .isInt({ min: 1, allow_leading_zeroes: false })
    .withMessage(isNumericMessage("Language"))
    .toInt(),
  query("technologies")
    .if(query("technologies").not().isArray())
    .optional()
    .notEmpty()
    .withMessage(notEmptyMessage("Technologies"))
    .isAlpha()
    .withMessage(isAlphaMessage("Technologies"))
    .escape()
    .trim()
    .toUpperCase(),
  query("technologies.*")
    .optional()
    .notEmpty()
    .withMessage(notEmptyMessage("Technologies"))
    .isAlpha()
    .withMessage(isAlphaMessage("Technologies"))
    .escape()
    .trim()
    .toUpperCase(),
  (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      response.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  },
];
