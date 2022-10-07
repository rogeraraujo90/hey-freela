import { hash, compare } from "bcrypt";

const ENCRYPT_ROUNDS = 10;

export default class BcryptHashProvider {
  static async getHash(value: string): Promise<string> {
    return hash(value, ENCRYPT_ROUNDS);
  }

  static compareHash(value: string, hashedValue: string): Promise<boolean> {
    return compare(value, hashedValue);
  }
}
