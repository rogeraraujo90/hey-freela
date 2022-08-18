import ProfessionalProfileRepository from "@repositories/PrefessionalProfileRepository";
import EntityNotFoundError from "@errors/EntityNotFoundError";

interface ListProps {
  language?: number;
}

export default class ProfessionalProfileService {
  static async getAllPublished({ language }: ListProps) {
    if (language) {
      return ProfessionalProfileRepository.findByLanguage(language);
    }

    return ProfessionalProfileRepository.getAllPublished();
  }

  static async getProfile(profileId: string) {
    const professionalProfile = await ProfessionalProfileRepository.findOne({
      where: { id: profileId },
      relations: { owner: { workingProjects: true } },
    });

    if (!professionalProfile) {
      throw new EntityNotFoundError("Professional profile", profileId);
    }

    return professionalProfile;
  }
}
