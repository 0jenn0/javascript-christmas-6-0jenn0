import { Calendar } from '../../../src/Model';
import { SpecialEvent } from '../../../src/Model/Events';

jest.mock('../../../src/Model/Calendar');

describe('SpecialEvent 클래스 테스트', () => {
  describe('증정 메뉴인 샴페인 가격 구하기', () => {
    const testCase = [
      [24, 1_000],
      [26, 0],
    ];
    test.each(testCase)('%d일 특별 할인 금액? %s원', (day, expected) => {
      const calendar = new Calendar(day);
      const specialEvent = new SpecialEvent(calendar);
      expect(specialEvent.calculateDiscountAmount()).toBe(expected);
    });

    const testEdgeCase = [[25, 1_000]];
    test.each(testEdgeCase)(
      '엣지케이스) %d일 디데이 할인 금액? %s원',
      (day, expected) => {
        const calendar = new Calendar(day);
        const specialEvent = new SpecialEvent(calendar);
        expect(specialEvent.calculateDiscountAmount()).toBe(expected);
      },
    );
  });

  describe('디데이 이벤트 할인 정보 가져오기', () => {
    const testCase = [
      [4, 0],
      [25, 1_000],
    ];
    test.each(testCase)(
      '%d일 날 디데이 할인 fetch하면? {특별 할인, %d}',
      (day, expected) => {
        const calendar = new Calendar(day);
        const specialEvent = new SpecialEvent(calendar);
        expect(specialEvent.fetchDiscountInformation().discountTitle).toBe(
          '특별 할인',
        );
        expect(specialEvent.fetchDiscountInformation().discountAmount).toEqual(
          expected,
        );
      },
    );
  });
});
