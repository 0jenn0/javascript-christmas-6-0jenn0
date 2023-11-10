import AppError from "../../src/Error/AppError";
import OrderItemValidator from "../../src/Validator/OrderItemValidator";

describe("OrderItemValidator 클래스 테스트", () => {
  test("메뉴판에있는 메뉴만 주문할 수 있다.", () => {
    const input = "짜파구리-2,스파게티-1";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).toThrow(AppError.PREFIX);
  });
});
