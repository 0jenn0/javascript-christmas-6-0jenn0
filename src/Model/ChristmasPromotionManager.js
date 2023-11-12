import { MENU } from "../constants/menu.js";
import Calendar from "./Calendar.js";

export default class ChristmasPromotionManager {
  #orderItemList;
  #day;
  #calendar;

  constructor(orderItemList, day) {
    this.#orderItemList = orderItemList;
    this.#calendar = new Calendar(day);
    this.#day = Number(day);
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
    let totalDiscount = 0;
    totalDiscount += this.calculateDdayDiscount();
    totalDiscount += this.calculateWeekendDiscount().discount;
    totalDiscount += this.calculateSpecialDiscount();
    return totalDiscount;
  }

  calculateAllOrderPrice() {
    const allOrderPrice = this.#orderItemList.reduce((accPrice, orderItem) => {
      accPrice += orderItem.calculateTotalPrice();
      return accPrice;
    }, 0);
    return allOrderPrice;
  }
}
