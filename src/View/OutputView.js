import { Console } from "@woowacourse/mission-utils";
import { MENU_CATEGORIES } from "../constants/menu.js";
import OrderItem from "../Model/OrderItem.js";

const OutputView = {
  printHello() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },

  printMenu(totalOrderMenu) {
    Console.print(`<주문 메뉴>`);
    Object.keys(totalOrderMenu).forEach((category) => {
      Console.print(`--- ${MENU_CATEGORIES[category]} ---`);
      totalOrderMenu[category].forEach((orderItem) => {
        Console.print(`${orderItem.menuName} ${orderItem.quantity}개`);
      });
      Console.print("");
    });
  },

  printTotalPriceBeforePromotion(price) {
    Console.print(`<할인 전 총주문 금액>`);
    Console.print(`${price.toLocaleString()}원`);
  },
};

export default OutputView;
