import AppError from '../../src/Error/AppError';
import OrderItemValidator from '../../src/Validator/OrderItemValidator';

describe('OrderItemValidator 클래스 테스트', () => {
  test('정상 케이스) 메뉴이름-개수 형식으로 입력받는다.', () => {
    const input = ['양송이수프-1'];

    expect(() => OrderItemValidator.validateOrder(input)).not.toThrow(
      AppError.PREFIX,
    );
  });

  test('예외 케이스) 메뉴이름-개수 형식으로 입력받는다.', () => {
    const input = ['양송이수프 2개', '타파스 1개'];

    expect(() => OrderItemValidator.validateOrder(input)).toThrow(
      AppError.PREFIX,
    );
  });

  test('메뉴판에있는 메뉴만 주문할 수 있다.', () => {
    const input = ['짜파구리-2', '스파게티-1'];

    expect(() => OrderItemValidator.validateOrder(input)).toThrow(
      AppError.PREFIX,
    );
  });

  test('예외 케이스) 메뉴 주문은 최소 1개부터 가능하다.', () => {
    const input = ['양송이수프-0'];

    expect(() => OrderItemValidator.validateOrder(input)).toThrow(
      AppError.PREFIX,
    );
  });

  test('예외 케이스) 메뉴 주문은 최대 20개 까지만 가능하다.', () => {
    const input = ['양송이수프-10', '티본스테이크-10', '제로콜라-10'];

    expect(() => OrderItemValidator.validateOrder(input)).toThrow(
      AppError.PREFIX,
    );
  });

  test('엣지 케이스) 메뉴 주문은 최대 20개 까지만 가능하다.', () => {
    const input = ['양송이수프-10', '제로콜라-10'];

    expect(() => OrderItemValidator.validateOrder(input)).not.toThrow(
      AppError.PREFIX,
    );
  });

  test('예외 케이스) 메뉴 주문시 메뉴 중복 불가하다.', () => {
    const input = ['제로콜라-10', '제로콜라-5'];

    expect(() => OrderItemValidator.validateOrder(input)).toThrow(
      AppError.PREFIX,
    );
  });

  test('예외 케이스) 음료만 주문 불가하다.', () => {
    const input = ['제로콜라-10', '레드와인-5'];

    expect(() => OrderItemValidator.validateOrder(input)).toThrow(
      AppError.PREFIX,
    );
  });
});
