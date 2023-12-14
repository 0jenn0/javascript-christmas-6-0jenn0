import AppError from '../Error/AppError.js';

const VisitDayValidator = Object.freeze({
  checkType: (input) => {
    if (Number.isNaN(Number(input))) {
      throw new AppError('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  checkRange: (input) => {
    if (Number(input) < 1 || Number(input) > 31) {
      throw new AppError('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  check: (input) => {
    VisitDayValidator.checkType(input);
    VisitDayValidator.checkRange(input);
  },
});

export default VisitDayValidator;
