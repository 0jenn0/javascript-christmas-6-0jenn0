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

  test("달력에 별이 있는 날 특별 할인 가격은 1000원이다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("초코케이크", "1"),
      new OrderItem("아이스크림", "1"),
    ];
    const day = 25;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateSpecialDiscount()).toBe(1_000);
  });

  test("할인 전 총금액이 12만원 이상이면 샴페인을 증정한다.", () => {
    const input = [
      new OrderItem("티본스테이크", "2"),
      new OrderItem("초코케이크", "1"),
      new OrderItem("아이스크림", "1"),
    ];
    const day = 25;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.calculateGiftMenu()).toBe(25_000);
  });

  test("총금액이 1만원 미만은 할인이 없다. - 엣지 케이스", () => {
    const input = [new OrderItem("아이스크림", "2")];
    const day = 25;
    const christmasPromotionManager = new ChristmasPromotionManager(input, day);
    expect(christmasPromotionManager.calculateTotalDiscount()).not.toBe(0);
  });

  test("총금액이 1만원 이상일 때 이벤트가 있다.", () => {
    const input = [new OrderItem("초코케이크", "1")];
    const day = 25;

    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    const spy = jest.spyOn(christmasPromotionManager, "calculateTotalDiscount");

    christmasPromotionManager.calculatePriceAfterPromotion();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("총금액에 따라 배지를 증정해야한다.", () => {
    const input = [new OrderItem("초코케이크", "1")];
    const day = 25;

    const christmasPromotionManager = new ChristmasPromotionManager(input, day);

    expect(christmasPromotionManager.determineBadgeAward()).toBe("트리");
  });
});
