import BaseModel from "@models/BaseModel";
import { Column, Entity, Index, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer";
import type Language from "@models/Language";
import type User from "@models/User";

@Entity()
@Index(["githubProfile", "language"], { unique: true })
export default class ProfessionalProfile extends BaseModel {
  @Column()
  description: string;

  @Column()
  githubProfile: string;

  @Column({ type: "json", nullable: true })
  technologies: string[];

  @Column({ type: "json", nullable: true })
  publishedProjects: string[];

  @Exclude()
  @ManyToOne("Language", { nullable: false })
  language: Language;

  @Exclude()
  @Column({ default: false })
  isPublished: boolean;

  @ManyToOne("User", { nullable: false })
  owner: User;
}
