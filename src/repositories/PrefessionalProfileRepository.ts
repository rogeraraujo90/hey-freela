import { container } from "tsyringe";
import { DataSource } from "typeorm";
import ProfessionalProfile from "@models/ProfessionalProfile";

const customMethods = {
  async getAllPublished() {
    return this.findBy({ isPublished: true });
  },

  async findByLanguage(language: number) {
    return this.findBy({
      "language.id": language,
      isPublished: true,
    });
  },
};

const ProfessionalProfileRepository = container
  .resolve<DataSource>("DataSource")
  .getRepository(ProfessionalProfile)
  .extend(customMethods);

export default ProfessionalProfileRepository;
