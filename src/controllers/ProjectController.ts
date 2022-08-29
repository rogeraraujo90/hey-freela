import { NextFunction, Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import ProjectService from "@services/ProjectService";

export default class ProjectController {
  static async index(request: Request, response: Response, next: NextFunction) {
    try {
      const allPublishedProjects = await ProjectService.getAllPublished();

      response.json(instanceToInstance(allPublishedProjects));
    } catch (error) {
      next(error);
    }
  }
}
