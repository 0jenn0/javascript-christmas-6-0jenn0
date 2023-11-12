export default class SpecialEvent {
  #calendar;

  constructor(calendar) {
    this.#calendar = calendar;
  }

  #canOfferEvent() {
    return this.#calendar.isSpecialDay();
  }

  calculateDiscounAmount() {
    if (this.#canOfferEvent()) {
      return 1_000;
    }
    return 0;
  }

  fetchDiscountInformation() {
    return {
      eventName: "특별 할인",
      discountAmount: this.calculateDiscounAmount(),
    };
  }
}
