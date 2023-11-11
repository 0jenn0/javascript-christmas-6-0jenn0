export default class Calendar {
  #year;
  #month;

  constructor(year, month) {
    this.#year = year;
    this.#month = month;
  }

  isWeekend(day) {
    const date = new Date(this.#year, this.#month - 1, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return true;
    }
    return false;
  }
}
