import { Console } from "@woowacourse/mission-utils";
import { MENU_CATEGORIES } from "../constants/menu.js";
import OrderItem from "../Model/OrderItem.js";

const OutputView = {
  printHello() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },

  printMenu(totalOrderMenu) {
    Console.print(`\n<주문 메뉴>`);
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
    Console.print(`${price.toLocaleString()}원\n`);
  },

  printGiftMenu(gift) {
    Console.print(`<증정 메뉴>`);
    Console.print(`${gift}\n`);
  },

  printDiscountDetails(discountDetails) {
    Console.print(`<혜택 내역>`);
    if (typeof discountDetails === "string") {
      Console.print(`${discountDetails}\n`);
    }

    discountDetails.forEach(({ eventName, discountAmount }) =>
      Console.print(`${eventName}: ${discountAmount.toLocaleString()}원`)
    );
    Console.print("");
  },

  printTotalDiscountAmount(discounAmount) {
    Console.print(`<총혜택 금액>`);
    Console.print(`${discounAmount.toLocaleString()}원\n`);
  },

  printExpectedPaymentAfterDiscount(expectedPayment) {
    Console.print(`<할인 후 예상 결제 금액>`);
    Console.print(`${expectedPayment.toLocaleString()}원\n`);
  },

  printDecemberEventBadge(badge) {
    Console.print(`<12월 이벤트 배지>`);
    Console.print(`${badge}\n`);
  },
};

export default OutputView;
