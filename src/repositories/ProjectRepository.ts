import { container } from "tsyringe";
import { DataSource } from "typeorm";
import Project from "@models/Project";

const customMethods = {
  async getAllPublished() {
    return this.findBy({ isPublished: true });
  },
};

const ProjectRepository = container
  .resolve<DataSource>("DataSource")
  .getRepository(Project)
  .extend(customMethods);

export default ProjectRepository;
