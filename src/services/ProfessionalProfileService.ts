import ProfessionalProfileRepository from "@repositories/PrefessionalProfileRepository";

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
}
