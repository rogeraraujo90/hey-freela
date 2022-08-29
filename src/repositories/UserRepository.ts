import { container } from "tsyringe";
import { DataSource } from "typeorm";
import User from "@models/User";

const UserRepository = container
  .resolve<DataSource>("DataSource")
  .getRepository(User);

export default UserRepository;
