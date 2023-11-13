import { DISCOUNT_TITLES, SPECIAL_EVENT } from "../../constants/index.js";

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
      discountTitle: DISCOUNT_TITLES.SPECIAL_DISCOUNT,
      discountAmount: this.calculateDiscounAmount(),
    };
  }
}
