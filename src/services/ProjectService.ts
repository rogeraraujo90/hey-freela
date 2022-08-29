import ProjectRepository from "@repositories/ProjectRepository";

export default class ProjectService {
  static async getAllPublished() {
    return ProjectRepository.getAllPublished();
  }
}
