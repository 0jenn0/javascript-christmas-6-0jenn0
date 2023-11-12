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

  // 뱃지 이벤트
  determineBadgeAward() {
    const totalPrice = this.calculateAllOrderPrice();

    if (totalPrice >= 20_000) {
      return "산타";
    } else if (totalPrice >= 10_000) {
      return "트리";
    } else if (totalPrice >= 5_000) {
      return "별";
    }
    return "없음";
  }
}
