import DayValidator from "../Validator/DayValidator";

export default class Day {
  #day;

  constructor(day) {
    DayValidator.validateDay(day);
    this.#day = Number(day);
  }

  calculateDaysSinceFirst() {
    return this.#day - 1;
  }

  isPossibleDdayEvent() {
    return 1 <= this.#day && this.#day <= 25;
  }
}
