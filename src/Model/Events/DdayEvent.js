import { DDAY_EVENT, DISCOUNT_TITLES } from "../../constants/index.js";

const { START_DISCOUNT, DAILY_INCREASE } = DDAY_EVENT;

export default class DdayEvent {
  #calendar;

  constructor(calendar) {
    this.#calendar = calendar;
  }

  #canOfferEvent() {
    return this.#calendar.isPossibleDdayEvent();
  }

  calculateDiscounAmount() {
    if (this.#canOfferEvent()) {
      return (
        START_DISCOUNT +
        DAILY_INCREASE * this.#calendar.calculateDaysSinceFirst()
      );
    }
    return 0;
  }

  fetchDiscountInformation() {
    return {
      discountTitle: DISCOUNT_TITLES.DDAY_DISCOUNT,
      discountAmount: this.calculateDiscounAmount(),
    };
  }
}
