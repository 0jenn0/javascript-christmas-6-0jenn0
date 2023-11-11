import {
  OrderItem,
  ChristmasPromotionManager,
  Day,
} from "../../src/Model/index.js";

describe("ChristmasPromotionManager 클래스 테스트", () => {
  test("총주문 금액을 구해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const day = new Day("10");
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateAllOrderPrice()).toBe(170_000);
  });

  test("방문날짜가 1~25일이면 크리스마스 디데이 할인금액을 구해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const day = new Day("25");
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateDdayDiscount()).toBe(3_400);
  });

  test("방문날짜가 1~25일이 아니면 크리스마스 디데이 할인금액 0원이어야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const day = new Day("30");
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateDdayDiscount()).toBe(0);
  });
});
