import { GiftMenuEvent } from '../../../src/Model/Events';

describe('GiftMenuEvent 클래스 테스트', () => {
  describe('증정 메뉴인 샴페인 가격 구하기', () => {
    const testCase = [
      [140_000, 25_000],
      [20_000, 0],
    ];
    test.each(testCase)(
      '총금액이 %d원일 때 혜택가격은? %d원',
      (totalPayment, expected) => {
        const giftMenuEvent = new GiftMenuEvent(totalPayment);
        expect(giftMenuEvent.calculateDiscountAmount()).toBe(expected);
      },
    );

    const testEdgeCase = [[120_000, 25_000]];
    test.each(testEdgeCase)(
      '엣지케이스) 총금액이 %d원일 때 혜택가격은? %d원',
      (totalPayment, expected) => {
        const giftMenuEvent = new GiftMenuEvent(totalPayment);
        expect(giftMenuEvent.calculateDiscountAmount()).toBe(expected);
      },
    );
  });

  describe('증정 메뉴 이벤트 정보 가져오기', () => {
    const testCase = [
      [160_000, 25_000],
      [20_000, 0],
    ];
    test.each(testCase)(
      '%d일 날 증정 메뉴 이벤트 정보를 fetch하면? {증정 메뉴, %d}',
      (totalPayment, expected) => {
        const giftMenuEvent = new GiftMenuEvent(totalPayment);
        expect(giftMenuEvent.fetchDiscountInformation().discountTitle).toBe(
          '증정 이벤트',
        );
        expect(giftMenuEvent.fetchDiscountInformation().discountAmount).toEqual(
          expected,
        );
      },
    );
  });
});
