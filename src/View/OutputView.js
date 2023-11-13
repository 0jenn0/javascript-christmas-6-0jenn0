import { Console } from "@woowacourse/mission-utils";
import { MENU_CATEGORIES } from "../constants/menu.js";
import formatAsWon from "../utils/formatAsWon.js";

const OutputView = {
  printHello() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },

  printEventPreview(visitDay) {
    Console.print(
      `\n12월 ${visitDay}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printMenu(totalOrderMenu) {
    Console.print(`\n<주문 메뉴>`);
    Object.keys(totalOrderMenu).forEach((category) => {
      totalOrderMenu[category].sort(
        (beforeOrderItem, afterOrderItem) =>
          beforeOrderItem.menuName.localeCompare(afterOrderItem.menuName),
        "ko"
      );
      Console.print(`--- ${MENU_CATEGORIES[category]} ---`);
      totalOrderMenu[category].forEach((orderItem) => {
        Console.print(`${orderItem.menuName} ${orderItem.quantity}개`);
      });
      Console.print("");
    });
  },

  printTotalPriceBeforePromotion(price) {
    Console.print(`<할인 전 총주문 금액>`);
    Console.print(`${formatAsWon(price)}\n`);

    if (price < 10_000) {
      Console.print(
        `[이벤트 안내] 총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.\n`
      );
    }
  },

  printGiftMenu(gift) {
    Console.print(`<증정 메뉴>`);
    Console.print(`${gift}\n`);
  },

  printDiscountDetails(discountDetails) {
    Console.print(`<혜택 내역>`);
    if (discountDetails === "없음") {
      return Console.print(`${discountDetails}\n`);
    }
    if (discountDetails.length === 0) {
      return Console.print(`없음\n`);
    }

    discountDetails.forEach(({ eventName, discountAmount }) =>
      Console.print(`${eventName}: -${formatAsWon(discountAmount)}`)
    );
    Console.print("");
  },

  printTotalDiscountAmount(discounAmount) {
    Console.print(`<총혜택 금액>`);
    if (discounAmount === 0) {
      return Console.print(`${formatAsWon(discounAmount)}\n`);
    }
    Console.print(`-${formatAsWon(discounAmount)}\n`);
  },

  printExpectedPaymentAfterDiscount(expectedPayment) {
    Console.print(`<할인 후 예상 결제 금액>`);
    Console.print(`${formatAsWon(expectedPayment)}\n`);
  },

  printDecemberEventBadge(badge) {
    Console.print(`<12월 이벤트 배지>`);
    Console.print(`${badge}`);
    Console.print(
      `(배지에 따라 2024 새해 이벤트 참여 시, 각각 다른 새해 선물을 증정할 예정입니다.)\n`
    );
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
