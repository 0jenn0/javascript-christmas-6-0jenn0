import AppError from "../Error/AppError.js";
import ERROR_MESSAGE from "../Error/message.js";
import { MENU } from "../constants/menu.js";

export default class OrderItemValidator {
  #orderItems;

  constructor(input) {
    const orderItems = input.split(",");
    this.#orderItems = orderItems;
  }

  validateOrder() {
    this.#validateFormat(this.#orderItems);
    this.#validateIsInMenu(this.#orderItems);
  }

  #validateFormat() {
    const pattern = /^[가-힣]+-[1-9]\d*$/;

    if (this.#orderItems.some((item) => !pattern.test(item))) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }

  #validateIsInMenu(orderItems) {
    const allMenu = Object.values(MENU).flat((item) => item.name);
    const isAllinMenu = orderItems.every((item) =>
      allMenu.includes(item.split("-")[0])
    );
    if (!isAllinMenu) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }

  #validateMenuQuantity(orderItems) {}
}
