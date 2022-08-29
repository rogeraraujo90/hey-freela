import { Request, Response, NextFunction } from "express";
import { instanceToInstance } from "class-transformer";
import UserService from "@services/UserService";

export default class UserController {
  static async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { email, password, firstName, lastName, preferredName } =
        request.body;
      const newUser = await UserService.create({
        email,
        password,
        firstName,
        lastName,
        preferredName,
      });

      response.status(201).json(instanceToInstance(newUser));
    } catch (error) {
      next(error);
    }
  }
}
