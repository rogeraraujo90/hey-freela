import { query } from "express-validator";
import {
  isAlphaMessage,
  isNumericMessage,
  notEmptyMessage,
} from "../utils/validations-messages";
import validationHandler from "../utils/validation-handler";

const validations = [
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
];

export default [...validations, validationHandler];
