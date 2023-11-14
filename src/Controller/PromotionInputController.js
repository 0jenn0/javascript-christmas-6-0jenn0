import { executeOrRetryAsync } from "../utils/index.js";
import { InputView } from "../View/index.js";
import { OrderItem } from "../Model/index.js";
import { OrderItemValidator, DayValidator } from "../Validator/index.js";
import { SYMBOLS } from "../constants/symbol.js";
import OrderItemInventory from "../Model/OrderItemInventory.js";

export default class PromotionInputController {
  static async setupDay() {
    const inputVisitDay = await InputView.readDate();
    DayValidator.validateDay(inputVisitDay);
    const visitDay = Number(inputVisitDay);

    return visitDay;
  }

  static async setupOrderItemList() {
    const ordersInput = await InputView.readMenu();
    OrderItemValidator.validateOrder(ordersInput);
    const orderItemList = ordersInput.map(
      (orderItem) =>
        new OrderItem(
          orderItem.split(SYMBOLS.HYPHEN)[0].trim(),
          orderItem.split(SYMBOLS.HYPHEN)[1].trim()
        )
    );
    return orderItemList;
  }

  static async initializePromotionSetup() {
    const visitDay = await executeOrRetryAsync(this.setupDay);
    const orderItemList = await executeOrRetryAsync(this.setupOrderItemList);
    const orderItemInventory = new OrderItemInventory(orderItemList);

    return { visitDay, orderItemInventory };
  }
}
