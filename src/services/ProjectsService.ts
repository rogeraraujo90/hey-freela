import ProjectsRepository from "@repositories/ProjectsRepository";

export default class ProjectsService {
  static async listAllPublished() {
    return ProjectsRepository.listAllPublished();
  }
}
