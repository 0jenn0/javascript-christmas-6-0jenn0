import { Calendar } from "../../src/Model";

describe("Calendar 클래스 테스트", () => {
  test("금요일,토요일은 주말이다", () => {
    const calendar1 = new Calendar(1);
    const calendar2 = new Calendar(2);
    const calendar3 = new Calendar(3);

    expect(calendar1.isWeekend()).toBe(true);
    expect(calendar2.isWeekend()).toBe(true);
    expect(calendar3.isWeekend()).toBe(false);
  });

  test("12월의 일요일과 25일은 특별 할인이 적용되는 날이다.", () => {
    const calendar1 = new Calendar(3);
    const calendar2 = new Calendar(25);
    const calendar3 = new Calendar(11);

    expect(calendar1.isSpecialDay()).toBe(true);
    expect(calendar2.isSpecialDay()).toBe(true);
    expect(calendar3.isSpecialDay()).toBe(false);
  });
});
