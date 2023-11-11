import { Day } from "../../src/Model/index.js";

describe("Day 클래스 테스트", () => {
  test("방문 날짜가 1일 이후로 며칠 지난 후인지 계산해야한다.", () => {
    const day = new Day("22");

    expect(day.calculateDaysSinceFirst()).toBe(21);
  });

  test("방문 날짜에 크리스마스 디데이 이벤트가 가능한지 알아야한다.", () => {
    const day22 = new Day("22");
    const day31 = new Day("31");

    expect(day22.isPossibleDdayEvent()).toBe(true);
    expect(day31.isPossibleDdayEvent()).toBe(false);
  });
});
