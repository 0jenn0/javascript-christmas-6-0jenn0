import { Calendar } from "../../src/Model";

describe("Calendar 클래스 테스트", () => {
  test("금요일,토요일은 주말이다", () => {
    const calendar = new Calendar(2023, 12);

    expect(calendar.isWeekend(1)).toBe(true);
    expect(calendar.isWeekend(2)).toBe(true);
    expect(calendar.isWeekend(3)).toBe(false);
  });

  test("12월의 일요일과 25일은 특별 할인이 적용되는 날이다.", () => {
    const calendar = new Calendar(2023, 12);

    expect(calendar.isSpecailDay(3)).toBe(true);
    expect(calendar.isSpecailDay(25)).toBe(true);
    expect(calendar.isSpecailDay(11)).toBe(false);
  });
});
