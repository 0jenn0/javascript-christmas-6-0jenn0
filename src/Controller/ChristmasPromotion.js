import OrderItemValidator from "../Validator/OrderItemValidator.js";
import { InputView, OutputView } from "../View/index.js";
import {
  Calendar,
  ChristmasPromotionManager,
  OrderItem,
} from "../Model/index.js";
import { Console } from "@woowacourse/mission-utils";

export default class ChistmasPromotion {
  static async start() {
    OutputView.printHello();

    let date;
    let calendar;
    while (true) {
      try {
        const inputDate = await InputView.readDate();
        calendar = new Calendar(inputDate);
        date = inputDate;
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
