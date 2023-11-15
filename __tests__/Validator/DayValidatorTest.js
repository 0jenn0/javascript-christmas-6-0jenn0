import AppError from '../../src/Error/AppError.js';
import DayValidator from '../../src/Validator/DayValidator.js';

describe('DayValidator 클래스 테스트', () => {
  test('정상 케이스) 날짜는 1이상 31이하의 숫자여야한다.', () => {
    const input = '2';

    expect(() => DayValidator.validateDay(input)).not.toThrow(AppError.PREFIX);
  });

  test('예외 케이스) 날짜는 숫자만 입력 할 수 있다.', () => {
    const input = 'd';

    expect(() => DayValidator.validateDay(input)).toThrow(AppError.PREFIX);
  });

  test('엣지 케이스) 날짜는 1이상 31이하의 숫자여야한다.', () => {
    const inputMin = '1';
    const inputMax = '31';

    expect(() => DayValidator.validateDay(inputMin)).not.toThrow(
      AppError.PREFIX,
    );
    expect(() => DayValidator.validateDay(inputMax)).not.toThrow(
      AppError.PREFIX,
    );
  });
});
