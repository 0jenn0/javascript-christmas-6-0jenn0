import { Calendar } from "../../../src/Model";
import { DdayEvent } from "../../../src/Model/Events";

jest.mock("../../../src/Model/Calendar", () => {
  return jest.fn().mockImplementation((day) => {
    const date = new Date(2023, 11, day);
    const dayOfWeek = date.getDay();
    return {
      isPossibleDdayEvent: () => {
        const START_DAY = 1;
        const END_DAY = 25;

        return day >= START_DAY && day <= END_DAY;
      },
      isWeekend: () => {
        if (dayOfWeek === 5 || dayOfWeek === 6) {
          return true;
        }
        return false;
      },
      isSpecialDay: () => {
        if (dayOfWeek === 0 || day === 25) {
          return true;
        }
        return false;
      },
      calculateDaysSinceFirst: () => {
        return day - 1;
      },
    };
  });
});

describe("DdayEvent 클래스 테스트", () => {
  describe("디데이 이벤트 할인금액 구하기", () => {
    const testCase = [
      [1, 1_000],
      [2, 1_100],
      [25, 3_400],
    ];
    test.each(testCase)("%d일 디데이 할인 금액? %s원", (day, expected) => {
      const calendar = new Calendar(day);
      const dDayEvent = new DdayEvent(calendar);
      expect(dDayEvent.calculateDiscounAmount()).toBe(expected);
    });
  });

  describe("디데이 이벤트 할인 정보 가져오기", () => {
    const testCase = [
      [1, 1_000],
      [3, 1_200],
      [25, 3_400],
    ];
    test.each(testCase)(
      "%d일 날 디데이 할인 fetch하면? {크리스마스 디데이 할인,%d}",
      (day, expected) => {
        const calendar = new Calendar(day);
        const dDayEvent = new DdayEvent(calendar);
        expect(dDayEvent.fetchDiscountInformation().discountTitle).toBe(
          "크리스마스 디데이 할인"
        );
        expect(dDayEvent.fetchDiscountInformation().discountAmount).toEqual(
          expected
        );
      }
    );
  });
});
