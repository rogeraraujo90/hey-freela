import UserRepository from "@repositories/UserRepository";
import User from "@models/User";
import DuplicateEntityError from "@errors/DuplicateEntityError";

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

    const newUser = Object.assign(new User(), createUserProps);

    await UserRepository.save(newUser);

    return newUser;
  }
}
