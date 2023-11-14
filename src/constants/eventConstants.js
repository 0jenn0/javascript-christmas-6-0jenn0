export const DDAY_EVENT = Object.freeze({
  START_DISCOUNT: 1_000,
  DAILY_INCREASE: 100,
  START_DAY: 1,
  END_DAY: 25,
});

export const WEEKDAY_EVENT = Object.freeze({
  DISCOUNT_CATEGORY: "dessert",
  DESSERT_DISCOUNT: 2_023,
});

export const WEEKEND_EVENT = Object.freeze({
  DISCOUNT_CATEGORY: "main",
  MAIN_DISCOUNT: 2_023,
  FRIDAY_INDEX: 5,
  SATURDAY_INDEX: 6,
});

export const SPECIAL_EVENT = Object.freeze({
  DISCOUNT_AMOUNT: 1_000,
  SUNDAY_INDEX: 0,
  CHRISTAMAS_DAY: 25,
});

export const GIFT_EVENT = Object.freeze({
  MIN_AMOUNT: 120_000,
  GIFT_ITEM: "샴페인",
  GIFT_ITEM_QUANTITY: 1,
  NONE_GIFT: "없음",
});

export const BADGE_EVENT = Object.freeze({
  MIN_FOR_STAR: 5_000,
  MIN_FOR_TREE: 10_000,
  MIN_FOR_SANTA: 20_000,
  STAR_REWARD: "별",
  TREE_REWARD: "트리",
  SANTA_REWARD: "산타",
  NONE_REWARD: "없음",
});

export const ORDER_CONSTRAINTS = Object.freeze({
  MIN_ORDER_AMOUNT: 10_000,
  MAX_MENU_ITEMS: 20,
});
