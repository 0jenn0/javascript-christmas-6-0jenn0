import AppError from "../Error/AppError.js";
import ERROR_MESSAGE from "../Error/message.js";
import { MENU } from "../constants/menu.js";

export default class OrderItemValidator {
  #input;

  constructor(input) {
    this.#validateFormat(input);
    this.#input = input;
  }

  #validateFormat() {
    const pattern = /^[가-힣]+-\d+$/;

    if (pattern.test(this.#input)) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }
}
