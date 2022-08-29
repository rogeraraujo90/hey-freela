import { Request, Response, NextFunction } from "express";

export default class UserController {
  static async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      response.json({ message: "Coming soon" });
    } catch (error) {
      next(error);
    }
  }
}
