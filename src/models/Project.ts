import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isPublished: boolean;
}
