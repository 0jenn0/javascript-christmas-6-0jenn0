import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  printStartMessage: () => {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
  },

  printAnouncement: (day) => {
    Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  // menus : Menu[]
  printOrderMenus: (menus) => {
    Console.print(`\n<주문 메뉴>`);
    menus.forEach((menu) => {
      Console.print(`${menu.getName()} ${menu.getQuantity()}개`);
    });
  },

  printTotalPrice: (totalPrice) => {
    Console.print(`\n<할인 전 총주문 금액>\n${totalPrice}원`);
  },

  printGivingMenu: (givingMenu) => {
    Console.print(`\n<증정 메뉴>\n${givingMenu}`);
  },

  printNoEvent: () => {
    Console.print(`없음`);
  },

  printEvent: (discountName, discount) => {
    Console.print(`${discountName}: -${discount}원`);
  },
  printTotalBenefit: (totalBenefit) => {
    Console.print(`\n<총혜택 금액>\n-${totalBenefit}원`);
  },
  printExpectedPrice: (expectedPrice) => {
    Console.print(`\n<할인 후 예상 결제 금액>\n-${expectedPrice}원`);
  },
  prinBadge: (badge) => {
    Console.print(`\n<12월 이벤트 배지>\n${badge}`);
  },
});

export default OutputView;
