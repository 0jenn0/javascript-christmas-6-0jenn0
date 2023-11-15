import {
  WEEKDAY_EVENT,
  WEEKEND_EVENT,
  DISCOUNT_TITLES,
} from '../../constants/index.js';

export default class WeeklongEvent {
  #orderItemInventory;

  #calendar;

  constructor(orderItemInventory, calendar) {
    this.#orderItemInventory = orderItemInventory;
    this.#calendar = calendar;
  }

  #canOfferEvent() {
    const isWeekend = this.#calendar.isWeekend();
    return isWeekend;
  }

  calculateDiscountAmount() {
    if (this.#canOfferEvent()) {
      return this.#calculateDiscountAmountByCategory(
        WEEKEND_EVENT.DISCOUNT_CATEGORY,
        WEEKEND_EVENT.MAIN_DISCOUNT
      );
    }
    return this.#calculateDiscountAmountByCategory(
      WEEKDAY_EVENT.DISCOUNT_CATEGORY,
      WEEKDAY_EVENT.DESSERT_DISCOUNT
    );
  }

  fetchDiscountInformation() {
    return {
      discountTitle: this.#determineEventName(),
      discountAmount: this.calculateDiscountAmount(),
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

  #calculateDiscountAmountByCategory(category, discountPerMenuNum) {
    const totalQuantity =
      this.#orderItemInventory.sumQuantityByCategory(category);
    const discount = totalQuantity * discountPerMenuNum;
    return discount;
  }
}
