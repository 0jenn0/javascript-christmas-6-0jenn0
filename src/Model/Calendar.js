import { DayValidator } from "../Validator/index.js";

export default class Calendar {
  #year = 2023;
  #month = 12;
  #day;

  constructor(day) {
    this.#day = day;
  }

  isPossibleDdayEvent() {
    return this.#day >= 1 && this.#day <= 25;
  }

  isWeekend() {
    const date = new Date(this.#year, this.#month - 1, this.#day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return true;
    }
    return false;
  }

  isSpecialDay() {
    const date = new Date(this.#year, this.#month - 1, this.#day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || this.#day === 25) {
      return true;
    }
    return false;
  }

  calculateDaysSinceFirst() {
    return this.#day - 1;
  }
}
