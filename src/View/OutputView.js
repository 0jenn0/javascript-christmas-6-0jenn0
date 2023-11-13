import { Console } from "@woowacourse/mission-utils";
import formatAsWon from "../utils/formatAsWon.js";
import {
  MESSAGES,
  TITLES,
  MENU_CATEGORIES_KOR,
  ORDER_CONSTRAINTS,
} from "../constants/index.js";

const OutputView = {
  printHello() {
    Console.print(MESSAGES.WELCOME);
  },

  printEventPreview(visitDay) {
    Console.print(`\n${MESSAGES.EVENT_PREVIEW(visitDay)}`);
  },

  printMenu(totalOrderMenu) {
    Console.print(`\n${TITLES.ORDER_MENU}`);
    Object.keys(totalOrderMenu).forEach((category) => {
      totalOrderMenu[category].sort(
        (beforeOrderItem, afterOrderItem) =>
          beforeOrderItem.menuName.localeCompare(afterOrderItem.menuName),
        "ko"
      );
      Console.print(TITLES.MENU_CATEGORY(MENU_CATEGORIES_KOR[category]));
      totalOrderMenu[category].forEach(({ menuName, quantity }) => {
        Console.print(MESSAGES.FORMAT_MENU_ITEM(menuName, quantity));
      });
      Console.print("");
    });
  },

  printTotalPriceBeforePromotion(price) {
    Console.print(TITLES.TOTAL_PRICE_BEFORE_DISCOUNT);
    Console.print(`${formatAsWon(price)}\n`);

    if (price < ORDER_CONSTRAINTS.MIN_ORDER_AMOUNT) {
      Console.print(`${MESSAGES.EVENT_INTRO}\n`);
    }
  },

  printGiftMenu(gift) {
    Console.print(TITLES.GIFT_MENU);
    Console.print(`${gift}\n`);
  },

  printDiscountDetails(discountDetails) {
    Console.print(TITLES.BENEFIT_DETAILS);
    if (discountDetails === MESSAGES.NONE || discountDetails.length === 0) {
      return Console.print(`${MESSAGES.NONE}\n`);
    }

    discountDetails.forEach(({ eventName, discountAmount }) =>
      Console.print(`${eventName}: -${formatAsWon(discountAmount)}`)
    );
    Console.print("");
  },

  printTotalDiscountAmount(discounAmount) {
    Console.print(TITLES.TOTAL_BENEFIT_AMOUNT);
    if (discounAmount === 0) {
      return Console.print(`${formatAsWon(discounAmount)}\n`);
    }
    Console.print(`-${formatAsWon(discounAmount)}\n`);
  },

  printExpectedPaymentAfterDiscount(expectedPayment) {
    Console.print(TITLES.EXPECTED_PAYMENT_AFTER_DISCOUNT);
    Console.print(`${formatAsWon(expectedPayment)}\n`);
  },

  printDecemberEventBadge(badge) {
    Console.print(TITLES.DECEMBER_EVENT_BADGE);
    Console.print(badge);
    Console.print(`${MESSAGES.NEW_YEAR_EVENT_NOTICE}\n`);
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
