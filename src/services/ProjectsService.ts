import ProjectsRepository from "@repositories/ProjectsRepository";

export default class ProjectsService {
  static async getAllPublished() {
    return ProjectsRepository.getAllPublished();
  }
}
