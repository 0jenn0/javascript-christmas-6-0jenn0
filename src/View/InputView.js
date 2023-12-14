import { Console } from '@woowacourse/mission-utils';
import SYMBOLS from '../Constants/Symbol.js';

const InputView = Object.freeze({
  promptVisitDay: async () => {
    const input = await Console.readLineAsync(
      `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
    );

    return input;
  },

  promptMenu: async () => {
    const input = await Console.readLineAsync(
      `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n`,
    );

    return input.split(SYMBOLS.comma);
  },
});

export default InputView;
