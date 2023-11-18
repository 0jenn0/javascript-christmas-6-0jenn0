import { Calendar } from '../../src/Model/index.js';

describe('Calendar 클래스', () => {
  describe('주말 여부 판단', () => {
    test.each([
      [1, true],
      [2, true],
      [3, false],
    ])('12월 %i일은 주말인가? %s', (day, expected) => {
      const calendar = new Calendar(day);
      expect(calendar.isWeekend()).toBe(expected);
    });
  });

  describe('특별 할인 적용 날짜 판단', () => {
    test.each([
      [3, true],
      [25, true],
      [11, false],
    ])('12월 %i일은 특별 할인이 적용되는가? %s', (day, expected) => {
      const calendar = new Calendar(day);
      expect(calendar.isSpecialDay()).toBe(expected);
    });
  });

  describe('디데이 할인 이벤트 가능 여부', () => {
    test.each([
      [1, true],
      [25, true],
      [31, false],
    ])('12월 %i일에 디데이 할인 이벤트가 가능한가? %s', (day, expected) => {
      const calendar = new Calendar(day);
      expect(calendar.isPossibleDdayEvent()).toBe(expected);
    });
  });
});
