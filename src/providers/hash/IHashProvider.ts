export default interface IHashProvider {
  getHash(value: string): Promise<string>;

  compareHash(value: string, hashedValue: string): Promise<boolean>;
}
