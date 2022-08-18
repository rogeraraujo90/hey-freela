export default class BaseError {
  status: number;

  code: string;

  title: string;

  #detail: string;

  get detail(): string {
    return this.#detail;
  }

  set detail(value: string) {
    this.#detail = value;
  }
}
