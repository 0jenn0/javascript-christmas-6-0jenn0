import { Calendar } from "../../src/Model";

describe("Calendar 클래스 테스트", () => {
  test("금요일,토요일은 주말이다", () => {
    const calendar = new Calendar(2023, 12);

    expect(calendar.isWeekend(1)).toBe(true);
    expect(calendar.isWeekend(2)).toBe(true);
    expect(calendar.isWeekend(3)).toBe(false);
  });
});
