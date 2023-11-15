import { Console } from '@woowacourse/mission-utils';
import { menuBoard, MESSAGES, SYMBOLS } from '../constants/index.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(`${MESSAGES.READ_DATE}\n`);
    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(
      `\n${MESSAGES.READ_MENU}\n${menuBoard}\n`,
    );
    return input.split(SYMBOLS.COMMA);
  },
};

export default InputView;
