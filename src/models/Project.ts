import { Entity, Column, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer";
import BaseModel from "@models/BaseModel";
import type User from "@models/User";

@Entity()
export default class Project extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Exclude()
  @Column({ default: false })
  isPublished: boolean;

  @Column({ default: false })
  isActive: boolean;

  @ManyToOne("User", { nullable: false })
  owner: User;
}
