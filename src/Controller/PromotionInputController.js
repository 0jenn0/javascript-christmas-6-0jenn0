import executeOrRetryAsync from "../utils/executeOrRetryAsync.js";
import { InputView } from "../View/index.js";
import { Calendar, OrderItem } from "../Model/index.js";
import OrderItemValidator from "../Validator/OrderItemValidator.js";

export default class PromotionInputController {
  static async setupDate() {
    const inputDate = await InputView.readDate();
    const calendar = new Calendar(inputDate.trim());
    const date = inputDate;

    return { date, calendar };
  }

  static async setupOrderList() {
    const ordersInput = await InputView.readMenu();
    OrderItemValidator.validateOrder(ordersInput);
    const orderList = ordersInput.map(
      (orderItem) =>
        new OrderItem(
          orderItem.split("-")[0].trim(),
          orderItem.split("-")[1].trim()
        )
    );
    return orderList;
  }

  static async initializePromotionSetup() {
    const { date, calendar } = await executeOrRetryAsync(this.setupDate);
    const orderList = await executeOrRetryAsync(this.setupOrderList);

    return { date, calendar, orderList };
  }
}
