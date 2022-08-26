import ProfessionalProfileRepository from "@repositories/PrefessionalProfileRepository";
import EntityNotFoundError from "@errors/EntityNotFoundError";

interface ListFilters {
  language?: number;
  technologies?: string[];
}

export default class ProfessionalProfileService {
  static async getAllPublished({ language, technologies }: ListFilters) {
    const filters: ListFilters = {};

    if (language) {
      filters.language = language;
    }

    if (technologies) {
      filters.technologies = technologies;
    }

    return ProfessionalProfileRepository.getAllPublished(filters);
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
