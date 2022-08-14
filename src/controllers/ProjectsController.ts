import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import ProjectsService from "../services/ProjectsService";

export default class ProjectsController {
  static async index(request: Request, response: Response) {
    const allPublishedProjects = await ProjectsService.listAllPublished();

    return response.json(instanceToInstance(allPublishedProjects));
  }
}
