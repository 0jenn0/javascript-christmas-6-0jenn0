import Day from "../../src/Model/Day";

describe("Day 클래스 테스트", () => {
  test("방문 날짜가 1일 이후로 며칠 지난 후인지 계산해야한다.", () => {
    const day = new Day("22");
    expect(day.calculateDaysSinceFirst()).toBe(21);
  });
});
