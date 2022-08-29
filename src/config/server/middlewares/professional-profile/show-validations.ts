import { param } from "express-validator";
import validationHandler from "../utils/validation-handler";
import { isNumericMessage } from "../utils/validations-messages";

const validations = [
  param("id")
    .isInt({ min: 1, allow_leading_zeroes: false })
    .withMessage(isNumericMessage("Id"))
    .toInt(),
];

export default [...validations, validationHandler];
