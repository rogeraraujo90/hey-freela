import { container } from "tsyringe";
import { DataSource, Raw } from "typeorm";
import ProfessionalProfile from "@models/ProfessionalProfile";

interface GetAllPublishedProps {
  language?: number;
  technologies?: string[];
}

const customMethods = {
  async getAllPublished({ language, technologies }: GetAllPublishedProps) {
    const filters: Record<string, unknown> = {
      isPublished: true,
    };

    if (language) {
      filters["language.id"] = language;
    }

    if (technologies?.length) {
      filters.technologies = Raw(
        () => `UPPER(technologies) REGEXP '${technologies.join("|")}'`
      );
    }

    return this.find({ where: filters });
  },
};

const ProfessionalProfileRepository = container
  .resolve<DataSource>("DataSource")
  .getRepository(ProfessionalProfile)
  .extend(customMethods);

export default ProfessionalProfileRepository;
