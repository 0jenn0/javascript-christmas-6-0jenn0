import {
  WEEKDAY_EVENT,
  WEEKEND_EVENT,
  DISCOUNT_TITLES,
} from "../../constants/index.js";

export default class WeeklongEvent {
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
        WEEKEND_EVENT.DISCOUNT_CATEGORY,
        WEEKEND_EVENT.MAIN_DISCOUNT
      );
    }
    return this.#calculateDiscounAmountByCategory(
      WEEKDAY_EVENT.DISCOUNT_CATEGORY,
      WEEKDAY_EVENT.DESSERT_DISCOUNT
    );
  }

  fetchDiscountInformation() {
    return {
      discountTitle: this.#determineEventName(),
      discountAmount: this.calculateDiscounAmount(),
    };
  }

  #determineEventName() {
    if (this.#canOfferEvent()) {
      const discountTitle = DISCOUNT_TITLES.WEEKEND_DISCOUNT;
      return discountTitle;
    }
    const discountTitle = DISCOUNT_TITLES.WEEKDAY_DISCOUNT;
    return discountTitle;
  }

  #calculateDiscounAmountByCategory(category, discountPerMenuNum) {
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
    const discount = categoryMenuNum * discountPerMenuNum;
    return discount;
  }
}