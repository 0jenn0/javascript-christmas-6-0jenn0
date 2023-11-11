import AppError from "../../src/Error/AppError.js";
import DayValidator from "../../src/Validator/DayValidator.js";

describe("DayValidator 클래스 테스트", () => {
  test("날자는 1이상 31이하의 숫자여야한다.", () => {
    const input = "d";

    const dayValidator = new DayValidator(input);

    expect(() => dayValidator.validateDay()).toThrow(AppError.PREFIX);
  });

  test("날자는 1이상 31이하의 숫자여야한다. - 엣지케이스", () => {
    const inputMin = "1";
    const inputMax = "31";

    const minDayValidator = new DayValidator(inputMin);
    const maxDayValidator = new DayValidator(inputMax);

    expect(() => minDayValidator.validateDay()).not.toThrow(AppError.PREFIX);
    expect(() => maxDayValidator.validateDay()).not.toThrow(AppError.PREFIX);
  });
});
