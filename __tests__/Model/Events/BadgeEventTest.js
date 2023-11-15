import { BadgeEvent } from '../../../src/Model/Events';

describe('BadgeEvent 클래스 테스트', () => {
  describe('총구매액의 구간별로 배지 정하기', () => {
    const testEdgeCase = [
      [20_000, '산타'],
      [15_000, '트리'],
      [5_000, '별'],
    ];
    test.each(testEdgeCase)(
      '엣지 케이스) %d원은 %s 배지의 최소 금액이다.',
      (minPayment, expected) => {
        const badgeEvent = new BadgeEvent(minPayment);
        const badge = badgeEvent.determineBadgeAward();

        expect(badge).toBe(expected);
      }
    );

    const testCase = [
      [25_000, '산타'],
      [10_000, '트리'],
      [5_100, '별'],
      [4_000, '없음'],
    ];
    test.each(testCase)(
      '총구매액이 %d원일 때 배지는? %s',
      (minPayment, expected) => {
        const badgeEvent = new BadgeEvent(minPayment);
        const badge = badgeEvent.determineBadgeAward();

        expect(badge).toBe(expected);
      }
    );
  });
});
