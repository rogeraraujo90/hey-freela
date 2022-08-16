import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import ProfessionalProfileService from "@services/ProfessionalProfileService";

export default class ProfessionalProfileController {
  static async index(request: Request, response: Response) {
    const { language } = request.query;

    const allPublishedProfiles =
      await ProfessionalProfileService.getAllPublished({
        language: language ? Number(language) : undefined,
      });

    return response.json(instanceToInstance(allPublishedProfiles));
  }
}
