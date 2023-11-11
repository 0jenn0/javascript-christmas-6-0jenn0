import AppError from "../../src/Error/AppError";
import OrderItemValidator from "../../src/Validator/OrderItemValidator";

describe("OrderItemValidator 클래스 테스트", () => {
  test("정상 케이스", () => {
    const input = "양송이수프-1";
    const orderItemsValidator = new OrderItemValidator(input);

    expect(() => orderItemsValidator.validateOrder()).not.toThrow(
      AppError.PREFIX
    );
  });
  test("메뉴판에있는 메뉴만 주문할 수 있다.", () => {
    const input = "짜파구리-2,스파게티-1";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).toThrow(AppError.PREFIX);
  });

  test("메뉴 주문시 형식을 지켜야한다.", () => {
    const input = "양송이수프 2개,타파스 1개";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).toThrow(AppError.PREFIX);
  });

  test("메뉴 주문은 최소 1개부터 가능하다.", () => {
    const input = "양송이수프-0";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).toThrow(AppError.PREFIX);
  });

  test("메뉴 주문은 최대 20개 까지만 가능하다.", () => {
    const input = "양송이수프-10,티본스테이크-10,제로콜라-10";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).toThrow(AppError.PREFIX);
  });

  test("메뉴 주문은 최대 20개 까지만 가능하다. - 엣지케이스", () => {
    const input = "양송이수프-10,제로콜라-10";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).not.toThrow(
      AppError.PREFIX
    );
  });

  test("메뉴 주문시 메뉴 중복 불가하다.", () => {
    const input = "제로콜라-10,제로콜라-5";
    const orderItemsValidator = new OrderItemValidator(input);
    expect(() => orderItemsValidator.validateOrder()).toThrow(AppError.PREFIX);
  });
});
