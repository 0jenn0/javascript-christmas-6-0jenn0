import { MENU } from "../constants/menu.js";
import Calendar from "./Calendar.js";

export default class ChristmasPromotionManager {
  #orderItemList;
  #day;
  #calendar;

  constructor(orderItemList, day) {
    // orderItemList : List<OrderItem>, day: string
    this.#orderItemList = orderItemList;
    this.#calendar = new Calendar(day);
    this.#day = Number(day);
  }

  calculateAllOrderPrice() {
    const allOrderPrice = this.#orderItemList.reduce((accPrice, orderItem) => {
      accPrice += orderItem.calculateTotalPrice();
      return accPrice;
    }, 0);
    return allOrderPrice;
  }

  calculateDdayDiscount() {
    if (1 <= this.#day && this.#day <= 25) {
      return 1000 + 100 * this.#calendar.calculateDaysSinceFirst(this.#day);
    }
    return 0;
  }

  calculateWeekendDiscount() {
    const isWeekend = this.#calendar.isWeekend(this.#day);
    if (isWeekend) {
      const mainMenuNum = this.#orderItemList.reduce(
        (accMenuNum, orderItem) => {
          if (orderItem.findMenuCategory() === "main") {
            accMenuNum += orderItem.getQuantity();
            return accMenuNum;
          }
          return accMenuNum;
        },
        0
      );
      const discount = mainMenuNum * 2_023;

      return { isWeekend, discount };
    }
    const dessertMenuNum = this.#orderItemList.reduce(
      (accMenuNum, orderItem) => {
        if (orderItem.findMenuCategory() === "dessert") {
          accMenuNum += orderItem.getQuantity();
          return accMenuNum;
        }
        return accMenuNum;
      },
      0
    );
    const discount = dessertMenuNum * 2_023;

    return { isWeekend, discount };
  }

  calculateSpecialDiscount() {
    if (this.#calendar.isSpecialDay()) {
      return 1_000;
    }
    return 0;
  }

  calculateGiftMenu() {
    if (this.calculateAllOrderPrice() >= 120_000) {
      return Object.values(MENU)
        .flat()
        .find((item) => item.name === "샴페인").price;
    }
    return 0;
  }
}
