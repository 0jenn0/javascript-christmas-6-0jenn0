import { OrderItem } from "../../src/Model/index.js";

describe("OrderItem 클래스 테스트", () => {
  test("주문 금액을 구해야한다.", () => {
    const orderItem = new OrderItem("바비큐립", "2");
    expect(orderItem.calculateTotalPrice()).toBe(108_000);
  });

  test("메뉴의 카테고리를 알 수 있어야한다.", () => {
    const orderItem = new OrderItem("초코케이크", "2");
    expect(orderItem.findMenuCategory()).toBe("dessert");
  });
});
