import { NextFunction, Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import ProfessionalProfileService from "@services/ProfessionalProfileService";
import parseOptionalArrayParam from "@controllers/utils/parse-optional-array-param";

export default class ProfessionalProfileController {
  static async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { language, technologies } = request.query;

      const allPublishedProfiles =
        await ProfessionalProfileService.getAllPublished({
          language: language ? Number(language) : undefined,
          technologies: parseOptionalArrayParam(technologies),
        });

      response.json(instanceToInstance(allPublishedProfiles));
    } catch (error) {
      next(error);
    }
  }

  static async show(request: Request, response: Response, next: NextFunction) {
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
