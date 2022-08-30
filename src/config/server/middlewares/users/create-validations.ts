import { body, Meta } from "express-validator";
import enforceExistsValidation from "../utils/validations/enforce-exists-validation";
import validationHandler from "../utils/validation-handler";
import {
  areEqualMessage,
  isEmailMessage,
  isStrongPasswordMessage,
  notEmptyMessage,
} from "../utils/validations-messages";

const validations = [
  enforceExistsValidation("email")
    .isEmail()
    .withMessage(isEmailMessage("email"))
    .normalizeEmail()
    .trim(),
  enforceExistsValidation("password")
    .isStrongPassword()
    .withMessage(isStrongPasswordMessage("password"))
    .trim(),
  enforceExistsValidation("passwordConfirmation")
    .custom((value, { req }: Meta) => req.body.password === value)
    .withMessage(areEqualMessage("passwordConfirmation", "password"))
    .trim(),
  body(["firstName", "lastName", "preferredName"])
    .optional()
    .notEmpty({ ignore_whitespace: true })
    .withMessage(notEmptyMessage("firstName, lastName, and preferredName"))
    .escape()
    .trim(),
];

export default [...validations, validationHandler];
