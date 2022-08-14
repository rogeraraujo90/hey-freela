import DataSources from "../config/database/data-sources";
import Project from "../models/Project";

const ProjectsRepository = DataSources.getRepository(Project).extend({
  async listAllPublished() {
    return this.findBy({ isPublished: true });
  },
});

export default ProjectsRepository;
