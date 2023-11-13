import { DDAY_EVENT } from "../../constants/eventConstants.js";

const { START_DAY, END_DAY, START_DISCOUNT, DAILY_INCREASE } = DDAY_EVENT;

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
      eventName: "크리스마스 디데이 할인",
      discountAmount: this.calculateDiscounAmount(),
    };
  }
}
