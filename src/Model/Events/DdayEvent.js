export default class DdayEvent {
  #day;
  #calendar;

  constructor(day) {
    this.#calendar = new Calendar(day);
    this.#day = Number(day);
  }

  #canOfferEvent() {
    return 1 <= this.#day && this.#day <= 25;
  }

  calculateDiscounAmount() {
    if (this.#canOfferEvent()) {
      return 1000 + 100 * this.#calendar.calculateDaysSinceFirst(this.#day);
    }
    return 0;
  }

  fetchDiscountInformation() {
    return {
      eventName: "크리스마스 디데이 할인",
      discountAmount: this.calculateDiscounAmount(),
    };
  }
}
