import SYMBOLS from '../Constants/Symbol.js';
import AppError from '../Error/AppError.js';

const CommonValidator = Object.freeze({
  checkEmpty: (input) => {
    if (input === SYMBOLS.emptyString) {
      throw new AppError('아무것도 입력하지 않았으므로 다시 입력해주세요.');
    }
  },

  checkExistSpace: (input) => {
    if (input.includes(SYMBOLS.space)) {
      throw new AppError('입력한 값에 공백이 존재합니다.');
    }
  },

  check: (input) => {
    CommonValidator.checkEmpty(input);
    CommonValidator.checkExistSpace(input);
  },
});

export default CommonValidator;
