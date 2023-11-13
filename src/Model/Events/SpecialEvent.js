import { SPECIAL_EVENT } from "../../constants/eventConstants.js";

const { DISCOUNT_AMOUNT } = SPECIAL_EVENT;

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
      return DISCOUNT_AMOUNT;
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
