import AppError from "../Error/AppError.js";
import ERROR_MESSAGE from "../Error/message.js";
import { MENU } from "../constants/menu.js";

export default class OrderItemValidator {
  static validateOrder(orderItems) {
    this.#validateFormat(orderItems);
    this.#validateIsInMenu(orderItems);
    this.#validateMenuQuantity(orderItems);
    this.#validationDuplicateMenu(orderItems);
    this.#validateIsOnlyBeverage(orderItems);
  }

  static #validateFormat(orderItems) {
    const pattern = /^[가-힣]+\s*-\s*[1-9]\d*$/;

    if (orderItems.some((item) => !pattern.test(item.trim()))) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }

  static #validateIsInMenu(orderItems) {
    const allMenu = Object.values(MENU)
      .flat()
      .map((item) => item.name);

    const isAnyNotInMenu = orderItems.some(
      (item) => !allMenu.includes(item.split("-")[0].trim())
    );
    if (isAnyNotInMenu) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }

  static #validateMenuQuantity(orderItems) {
    const totalMenuQuantity = orderItems.reduce((accQuantity, orderItem) => {
      accQuantity += Number(orderItem.split("-")[1].trim());
      return accQuantity;
    }, 0);

    if (totalMenuQuantity > 20) {
      throw new AppError("메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.");
    }
  }

  static #validationDuplicateMenu(orderItems) {
    if (
      orderItems.length !==
      new Set(orderItems.map((item) => item.split("-")[0].trim())).size
    ) {
      throw new AppError(ERROR_MESSAGE.invalid_format);
    }
  }

  static #validateIsOnlyBeverage(orderItems) {
    const beverageMenu = Object.values(MENU.beverage).map((item) => item.name);

    const isAllBeverage = orderItems.every((item) =>
      beverageMenu.includes(item.split("-")[0].trim())
    );

    if (isAllBeverage) {
      throw new AppError("음료만 주문 불가합니다.");
    }
  }
}
