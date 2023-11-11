import { OrderItem, ChristmasPromotionManager } from "../../src/Model/index.js";

describe("ChristmasPromotionManager 클래스 테스트", () => {
  test("총주문 금액을 구해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const day = 10;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateAllOrderPrice()).toBe(170_000);
  });

  test("방문날짜가 1~25일이면 크리스마스 디데이 할인금액을 구해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const day = 25;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateDdayDiscount()).toBe(3_400);
  });

  test("방문날짜가 1~25일이 아니면 크리스마스 디데이 할인금액 0원이어야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("레드와인", "1"),
    ];
    const day = 30;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateDdayDiscount()).toBe(0);
  });

  test("주말에는 메인메뉴 1개당 2,023원 할인해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("바비큐립", "1"),
      new OrderItem("레드와인", "1"),
    ];
    const day = 1;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateWeekendDiscount().discount).toBe(
      2_023 * 3
    );
  });

  test("평일에는 디저트메뉴 1개당 2,023원 할인해야한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("초코케이크", "1"),
      new OrderItem("아이스크림", "1"),
    ];
    const day = 1;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateWeekendDiscount().discount).toBe(
      2_023 * 2
    );
  });
});
