import UserRepository from "@repositories/UserRepository";
import User from "@models/User";
import DuplicateEntityError from "@errors/DuplicateEntityError";
import { container } from "tsyringe";
import IHashProvider from "@providers/hash/IHashProvider";

interface CreateUserProps {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  preferredName?: string;
}

export default class UserService {
  static async create(createUserProps: CreateUserProps) {
    const existentUser = await UserRepository.findOneBy({
      email: createUserProps.email,
    });

    if (existentUser) {
      throw new DuplicateEntityError("User", "email");
    }

    const hasProvider = container.resolve<IHashProvider>("HashProvider");
    const hashedPassword = await hasProvider.getHash(createUserProps.password);
    const newUser = Object.assign(new User(), {
      ...createUserProps,
      password: hashedPassword,
    });

    await UserRepository.save(newUser);

    return newUser;
  }
}
