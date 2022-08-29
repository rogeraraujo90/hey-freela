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
    .isInt({ allow_leading_zeroes: false })
    .withMessage(isNumericMessage("language"))
    .toInt(),
  query("technologies")
    .if(query("technologies").not().isArray())
    .optional()
    .notEmpty()
    .withMessage(notEmptyMessage("technologies"))
    .isAlpha()
    .withMessage(isAlphaMessage("technologies"))
    .escape()
    .trim()
    .toUpperCase(),
  query("technologies.*")
    .optional()
    .notEmpty()
    .withMessage(notEmptyMessage("technologies"))
    .isAlpha()
    .withMessage(isAlphaMessage("technologies"))
    .escape()
    .trim()
    .toUpperCase(),
];

export default [...validations, validationHandler];
