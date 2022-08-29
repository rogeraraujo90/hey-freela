import { body, Meta } from "express-validator";
import validationHandler from "../utils/validation-handler";
import {
  areEqualMessage,
  existsMessage,
  isEmailMessage,
  isStrongPasswordMessage,
  notEmptyMessage,
} from "../utils/validations-messages";

const validations = [
  body("email")
    .exists()
    .withMessage(existsMessage("email"))
    .bail()
    .isEmail()
    .withMessage(isEmailMessage("email"))
    .normalizeEmail()
    .trim(),
  body("password")
    .exists()
    .withMessage(existsMessage("password"))
    .bail()
    .isStrongPassword()
    .withMessage(isStrongPasswordMessage("password"))
    .trim(),
  body("passwordConfirmation")
    .exists()
    .withMessage(existsMessage("passwordConfirmation"))
    .bail()
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
