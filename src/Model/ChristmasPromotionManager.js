import Calendar from "./Calendar.js";
import {
  DdayEvent,
  GiftMenuEvent,
  SpecialEvent,
  WeekendEvent,
} from "./Events/index.js";

export default class ChristmasPromotionManager {
  #orderItemList;
  #day;
  #calendar;

  constructor(orderItemList, day) {
    this.#orderItemList = orderItemList;
    this.#calendar = new Calendar(day);
    this.#day = Number(day);
  }

  initDiscountEvents() {
    const dDayEvent = new DdayEvent(this.#day, this.#calendar);
    const weekendEvent = new WeekendEvent(
      this.#orderItemList,
      this.#day,
      this.#calendar
    );
    const specialEvent = new SpecialEvent(this.#calendar);
    const giftMenuEvent = new GiftMenuEvent(this.calculateAllOrderPrice());
    return { dDayEvent, weekendEvent, specialEvent, giftMenuEvent };
  }

  calculatePriceAfterPromotion() {
    const priceBeforePromotion = this.calculateAllOrderPrice();

    if (priceBeforePromotion >= 10_000) {
      const totalDiscount = this.calculateTotalDiscount();
      return priceBeforePromotion - totalDiscount;
    }
    return priceBeforePromotion;
  }

  calculateTotalDiscount() {
    const events = this.initDiscountEvents();
    const totalDiscount = Object.values(events).reduce((acc, event) => {
      acc += event.calculateDiscounAmount();
      return acc;
    }, 0);
    return totalDiscount;
  }

  calculateAllOrderPrice() {
    const allOrderPrice = this.#orderItemList.reduce((accPrice, orderItem) => {
      accPrice += orderItem.calculateTotalPrice();
      return accPrice;
    }, 0);
    return allOrderPrice;
  }

  fetchTotalDiscountInfo() {
    const events = this.initDiscountEvents();
    const tatalDiscountInfo = Object.values(events).map((event) =>
      event.fetchDiscountInformation()
    );

    return tatalDiscountInfo;
  }
}
