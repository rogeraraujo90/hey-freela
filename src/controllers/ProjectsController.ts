import { NextFunction, Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import ProjectsService from "@services/ProjectsService";

export default class ProjectsController {
  static async index(request: Request, response: Response, next: NextFunction) {
    try {
      const allPublishedProjects = await ProjectsService.getAllPublished();

      response.json(instanceToInstance(allPublishedProjects));
    } catch (error) {
      next(error);
    }
  }
}
