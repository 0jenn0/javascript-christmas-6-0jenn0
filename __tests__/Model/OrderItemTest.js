import OrderItem from "../../src/model/OrderItem.js";

describe("OrderItem 클래스 테스트", () => {
  test("주문 금액을 구해야한다.", () => {
    const orderItem = new OrderItem("바비큐립", "2");
    expect(orderItem.calculateTotalPrice()).toBe(108_000);
  });
});
