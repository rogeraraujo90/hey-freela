import BaseModel from "@models/BaseModel";
import { Column, Entity, ManyToMany, OneToMany, JoinTable } from "typeorm";
import type Project from "@models/Project";
import type ProfessionalProfile from "@models/ProfessionalProfile";
import { Exclude } from "class-transformer";

@Entity()
export default class User extends BaseModel {
  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  preferredName?: string;

  @OneToMany("Project", (project: Project) => project.owner)
  projects: Project[];

  @ManyToMany("Project")
  @JoinTable()
  workingProjects: Project[];

  @OneToMany(
    "ProfessionalProfile",
    (professionalProfile: ProfessionalProfile) => professionalProfile.owner
  )
  professionalProfiles: ProfessionalProfile[];
}
