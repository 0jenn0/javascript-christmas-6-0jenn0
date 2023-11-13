import {
  WEEKDAY_EVENT,
  WEEKEND_EVENT,
} from "../../constants/eventConstants.js";

export default class WeekendEvent {
  #orderItemList;
  #calendar;

  constructor(orderItemList, calendar) {
    this.#orderItemList = orderItemList;
    this.#calendar = calendar;
  }

  #canOfferEvent() {
    const isWeekend = this.#calendar.isWeekend();
    return isWeekend;
  }

  calculateDiscounAmount() {
    if (this.#canOfferEvent()) {
      return this.#calculateDiscounAmountByCategory(
        WEEKEND_EVENT.DISCOUNT_CATEGORY
      );
    }
    return this.#calculateDiscounAmountByCategory(
      WEEKDAY_EVENT.DISCOUNT_CATEGORY
    );
  }

  fetchDiscountInformation() {
    return {
      eventName: this.#determineEventName(),
      discountAmount: this.calculateDiscounAmount(),
    };
  }

  #determineEventName() {
    if (this.#canOfferEvent()) {
      const eventName = "주말 할인";
      return eventName;
    }
    const eventName = "평일 할인";
    return eventName;
  }

  #calculateDiscounAmountByCategory(category) {
    const categoryMenuNum = this.#orderItemList.reduce(
      (accMenuNum, orderItem) => {
        if (orderItem.findMenuCategory() === category) {
          accMenuNum += orderItem.getQuantity();
          return accMenuNum;
        }
        return accMenuNum;
      },
      0
    );
    const discount = categoryMenuNum * WEEKDAY_EVENT.DESSERT_DISCOUNT;
    return discount;
  }
}
