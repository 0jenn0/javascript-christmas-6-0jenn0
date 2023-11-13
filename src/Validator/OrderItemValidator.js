import AppError from "../Error/AppError.js";
import ERROR_MESSAGE from "../constants/errorMessage.js";
import { ORDER_CONSTRAINTS } from "../constants/eventConstants.js";
import { MENU } from "../constants/menuConstants.js";
import { SYMBOLS } from "../constants/symbol.js";

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
      throw new AppError(ERROR_MESSAGE.INVALID_FORMAT);
    }
  }

  static #validateIsInMenu(orderItems) {
    const allMenu = Object.values(MENU)
      .flat()
      .map((item) => item.name);

    const isAnyNotInMenu = orderItems.some(
      (item) => !allMenu.includes(item.split(SYMBOLS.HYPHEN)[0].trim())
    );
    if (isAnyNotInMenu) {
      throw new AppError(ERROR_MESSAGE.INVALID_FORMAT);
    }
  }

  static #validateMenuQuantity(orderItems) {
    const totalMenuQuantity = orderItems.reduce((accQuantity, orderItem) => {
      accQuantity += Number(orderItem.split(SYMBOLS.HYPHEN)[1].trim());
      return accQuantity;
    }, 0);

    if (totalMenuQuantity > ORDER_CONSTRAINTS.MAX_MENU_ITEMS) {
      throw new AppError(ERROR_MESSAGE.MENU_LIMIT_EXCEEDED);
    }
  }

  static #validationDuplicateMenu(orderItems) {
    if (
      orderItems.length !==
      new Set(orderItems.map((item) => item.split(SYMBOLS.HYPHEN)[0].trim()))
        .size
    ) {
      throw new AppError(ERROR_MESSAGE.INVALID_FORMAT);
    }
  }

  static #validateIsOnlyBeverage(orderItems) {
    const beverageMenu = Object.values(MENU.beverage).map((item) => item.name);

    const isAllBeverage = orderItems.every((item) =>
      beverageMenu.includes(item.split(SYMBOLS.HYPHEN)[0].trim())
    );

    if (isAllBeverage) {
      throw new AppError(ERROR_MESSAGE.BEVERAGE_ONLY_ORDER_NOT_ALLOWED);
    }
  }
}
