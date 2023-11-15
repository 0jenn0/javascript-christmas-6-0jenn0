import {
  DDAY_EVENT,
  SPECIAL_EVENT,
  WEEKEND_EVENT,
} from '../../constants/index.js';

const { START_DAY, END_DAY } = DDAY_EVENT;
const { FRIDAY_INDEX, SATURDAY_INDEX } = WEEKEND_EVENT;
const { SUNDAY_INDEX, CHRISTAMAS_DAY } = SPECIAL_EVENT;

const mockCalendar = (day) => {
  const date = new Date(2023, 11, day);
  const dayOfWeek = date.getDay();

  return {
    isPossibleDdayEvent: jest.fn(() => day >= START_DAY && day <= END_DAY),
    isWeekend: jest.fn(
      () => dayOfWeek === FRIDAY_INDEX || dayOfWeek === SATURDAY_INDEX,
    ),
    isSpecialDay: jest.fn(
      () => dayOfWeek === SUNDAY_INDEX || day === CHRISTAMAS_DAY,
    ),
    calculateDaysSinceFirst: jest.fn(() => day - START_DAY),
  };
};

export default mockCalendar;
