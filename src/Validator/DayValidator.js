import AppError from "../Error/AppError";

export default class DayValidator {
  #day;
  constructor(day) {
    this.#day = Number(day);
  }

  validateDay() {
    this.#validateType();
    this.#validateRange();
  }

  #validateType() {
    if (isNaN(this.#day)) {
      throw new AppError("유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }

  #validateRange() {
    if (this.#day > 31 || this.#day < 1) {
      throw new AppError("유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }
}
