import BaseModel from "@models/BaseModel";
import { Column, Entity } from "typeorm";

@Entity()
export default class ProfessionalProfile extends BaseModel {
  @Column()
  githubProfile: string;

  @Column({ type: "json" })
  technologies: string[];

  @Column({ type: "json" })
  publishedProjects: string[];

  @Column()
  description: string;

  @Column()
  isPublished: boolean;
}
