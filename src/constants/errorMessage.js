import { ORDER_CONSTRAINTS } from "./eventConstants";

const ERROR_MESSAGE = Object.freeze({
  INVALID_FORMAT: "유효하지 않은 주문입니다. 다시 입력해 주세요.",
  MENU_LIMIT_EXCEEDED: `메뉴는 한 번에 최대 ${ORDER_CONSTRAINTS.MAX_MENU_ITEMS}개까지만 주문할 수 있습니다.`,
  BEVERAGE_ONLY_ORDER_NOT_ALLOWED: "음료만 주문 불가합니다.",
  INVALID_DAY: "유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  DAY_OUT_OF_RANGE:
    "날짜는 1에서 31 사이의 숫자여야 합니다. 다시 입력해 주세요.",
});

export default ERROR_MESSAGE;
