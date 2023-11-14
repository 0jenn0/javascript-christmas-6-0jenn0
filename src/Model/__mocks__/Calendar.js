const mockCalendar = (day) => {
  const date = new Date(2023, 11, day);
  const dayOfWeek = date.getDay();

  return {
    isPossibleDdayEvent: jest.fn(() => day >= 1 && day <= 25),
    isWeekend: jest.fn(() => dayOfWeek === 5 || dayOfWeek === 6),
    isSpecialDay: jest.fn(() => dayOfWeek === 0 || day === 25),
    calculateDaysSinceFirst: jest.fn(() => day - 1),
  };
};

export default mockCalendar;
