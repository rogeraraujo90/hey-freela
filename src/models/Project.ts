import { Entity, Column } from "typeorm";
import { Exclude } from "class-transformer";
import BaseModel from "@models/BaseModel";

@Entity()
export default class Project extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Exclude()
  @Column()
  isPublished: boolean;
}
