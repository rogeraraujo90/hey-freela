import { NextFunction, Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import ProfessionalProfileService from "@services/ProfessionalProfileService";

export default class ProfessionalProfileController {
  static async index(request: Request, response: Response) {
    const { language } = request.query;

    const allPublishedProfiles =
      await ProfessionalProfileService.getAllPublished({
        language: language ? Number(language) : undefined,
      });

    response.json(instanceToInstance(allPublishedProfiles));
  }

  static async find(request: Request, response: Response, next: NextFunction) {
    try {
      const profile = await ProfessionalProfileService.getProfile(
        request.params.id
      );

      response.json(instanceToInstance(profile));
    } catch (error) {
      next(error);
    }
  }
}
