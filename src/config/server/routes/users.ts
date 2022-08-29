import express from "express";
import UserController from "@controllers/UserController";
import createValidations from "../middlewares/users/create-validations";

const usersRoutes = express.Router();

usersRoutes.post("/", createValidations, UserController.create);

export default usersRoutes;
