import express from "express";
import UserController from "@controllers/UserController";

const usersRoutes = express.Router();

usersRoutes.post("/", UserController.create);

export default usersRoutes;
