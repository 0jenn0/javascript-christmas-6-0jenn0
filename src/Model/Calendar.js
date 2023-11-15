import {
  DDAY_EVENT,
  SPECIAL_EVENT,
  WEEKEND_EVENT,
} from '../constants/eventConstants.js';

export default class Calendar {
  #year = 2023;

  #month = 12;

  #day;

  constructor(day) {
    this.#day = day;
  }

  isPossibleDdayEvent() {
    const { START_DAY, END_DAY } = DDAY_EVENT;
    return this.#day >= START_DAY && this.#day <= END_DAY;
  }

  isWeekend() {
    const { FRIDAY_INDEX, SATURDAY_INDEX } = WEEKEND_EVENT;
    const date = new Date(this.#year, this.#month - 1, this.#day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === FRIDAY_INDEX || dayOfWeek === SATURDAY_INDEX) {
      return true;
    }
    return false;
  }

  isSpecialDay() {
    const { SUNDAY_INDEX, CHRISTAMAS_DAY } = SPECIAL_EVENT;
    const date = new Date(this.#year, this.#month - 1, this.#day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === SUNDAY_INDEX || this.#day === CHRISTAMAS_DAY) {
      return true;
    }
    return false;
  }

  calculateDaysSinceFirst() {
    return this.#day - 1;
  }
}
