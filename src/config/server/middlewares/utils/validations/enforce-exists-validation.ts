import { body, ValidationChain } from "express-validator";
import { existsMessage } from "@config/server/middlewares/utils/validations-messages";

export default (field: string): ValidationChain =>
  body(field).exists().withMessage(existsMessage(field)).bail();
