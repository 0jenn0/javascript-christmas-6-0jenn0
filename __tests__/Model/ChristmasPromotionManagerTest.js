import { OrderItem, ChristmasPromotionManager } from "../../src/Model/index.js";

describe("ChristmasPromotionManager 클래스 테스트", () => {
  test("총주문 금액을 구해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const christmasPromotionManager = new ChristmasPromotionManager(input);

    expect(christmasPromotionManager.calculateAllOrderPrice()).toBe(170_000);
  });
});
