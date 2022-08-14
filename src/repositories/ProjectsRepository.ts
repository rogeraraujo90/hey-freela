import { container } from "tsyringe";
import { DataSource } from "typeorm";
import Project from "../models/Project";

const ProjectsRepository = container
  .resolve<DataSource>("DataSource")
  .getRepository(Project)
  .extend({
    async listAllPublished() {
      return this.findBy({ isPublished: true });
    },
  });

export default ProjectsRepository;
