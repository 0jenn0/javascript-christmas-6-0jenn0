import AppError from "../Error/AppError.js";
import ERROR_MESSAGE from "../constants/errorMessage.js";

export default class DayValidator {
  static validateDay(day) {
    this.#validateType(day);
    this.#validateRange(day);
  }

  static #validateType(day) {
    if (isNaN(day)) {
      throw new AppError(ERROR_MESSAGE.INVALID_DAY);
    }
  }

  static #validateRange(day) {
    if (Number(day) > 31 || Number(day) < 1) {
      throw new AppError(ERROR_MESSAGE.INVALID_DAY);
    }
  }
}
