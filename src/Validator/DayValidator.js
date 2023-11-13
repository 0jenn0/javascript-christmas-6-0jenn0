import AppError from "../Error/AppError.js";

export default class DayValidator {
  static validateDay(day) {
    this.#validateType(day);
    this.#validateRange(day);
  }

  static #validateType(day) {
    if (isNaN(day)) {
      throw new AppError("유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }

  static #validateRange(day) {
    if (Number(day) > 31 || Number(day) < 1) {
      throw new AppError("유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }
}
