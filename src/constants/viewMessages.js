import { ORDER_CONSTRAINTS } from "./eventConstants";

const wrapWithTitleBrackets = (title) => `<${title}>`;

export const TITLES = Object.freeze({
  ORDER_MENU: wrapWithTitleBrackets("주문 메뉴"),
  TOTAL_PRICE_BEFORE_DISCOUNT: wrapWithTitleBrackets("할인 전 총주문 금액"),
  GIFT_MENU: wrapWithTitleBrackets("증정 메뉴"),
  BENEFIT_DETAILS: wrapWithTitleBrackets("혜택 내역"),
  TOTAL_BENEFIT_AMOUNT: wrapWithTitleBrackets("총혜택 금액"),
  EXPECTED_PAYMENT_AFTER_DISCOUNT:
    wrapWithTitleBrackets("할인 후 예상 결제 금액"),
  DECEMBER_EVENT_BADGE: wrapWithTitleBrackets("12월 이벤트 배지"),
  MENU_CATEGORY: (category) => `--- ${category} ---`,
});

export const MESSAGES = Object.freeze({
  WELCOME: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  EVENT_PREVIEW: (day) =>
    `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  EVENT_INTRO: `[이벤트 안내] 총주문 금액 ${ORDER_CONSTRAINTS.MIN_ORDER_AMOUNT}원 이상부터 이벤트가 적용됩니다.`,
  NEW_YEAR_EVENT_NOTICE:
    "(배지에 따라 2024 새해 이벤트 참여 시, 각각 다른 새해 선물을 증정할 예정입니다.)",
  NONE: "없음",
  READ_DATE:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
  READ_MENU:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
  FORMAT_MENU_ITEM: (menuName, quantity) => `${menuName} ${quantity}개`,
  NONE: "없음",
});
