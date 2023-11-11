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
    this.#validateMenuQuantity(this.#orderItems);
  }

  #validateFormat() {
    const pattern = /^[가-힣]+-[1-9]\d*$/;

    if (this.#orderItems.some((item) => !pattern.test(item))) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }

  #validateIsInMenu(orderItems) {
    const allMenu = Object.values(MENU)
      .flat()
      .map((item) => item.name);

    const isAnyNotInMenu = orderItems.some(
      (item) => !allMenu.includes(item.split("-")[0])
    );
    if (isAnyNotInMenu) {
      throw new AppError("ㅇㅇ");
    }
  }

  #validateMenuQuantity(orderItems) {
    const totalMenuQuantity = orderItems.reduce((accQuantity, orderItem) => {
      accQuantity += Number(orderItem.split("-")[1]);
      return accQuantity;
    }, 0);

    if (totalMenuQuantity > 20) {
      throw new AppError("메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.");
    }
  }
}
