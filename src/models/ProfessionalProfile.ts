import BaseModel from "@models/BaseModel";
import { Column, Entity, Index, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer";
import Language from "@models/Language";

@Entity()
@Index(["githubProfile", "language"], { unique: true })
export default class ProfessionalProfile extends BaseModel {
  @Column()
  description: string;

  @Column()
  githubProfile: string;

  @Column({ type: "json" })
  technologies: string[];

  @Column({ type: "json" })
  publishedProjects: string[];

  @Exclude()
  @ManyToOne(() => Language, { nullable: false })
  language: Language;

  @Exclude()
  @Column()
  isPublished: boolean;
}
