import OrderItemValidator from "../Validator/OrderItemValidator.js";
import { InputView, OutputView } from "../View/index.js";
import {
  Calendar,
  ChristmasPromotionManager,
  OrderItem,
} from "../Model/index.js";
import { Console } from "@woowacourse/mission-utils";

export default class ChristmasPromotion {
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

    let orderList = [];
    while (true) {
      try {
        const ordersInput = await InputView.readMenu();
        OrderItemValidator.validateOrder(ordersInput);
        ordersInput.forEach((orderItem) => {
          orderList.push(
            new OrderItem(orderItem.split("-")[0], orderItem.split("-")[1])
          );
        });
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const totalOrderMenu = orderList.reduce((acc, orderItem) => {
      acc[orderItem.findMenuCategory()]
        ? acc[orderItem.findMenuCategory()].push(orderItem.getInfo())
        : (acc[orderItem.findMenuCategory()] = [orderItem.getInfo()]);
      return acc;
    }, {});

    OutputView.printMenu(totalOrderMenu);

    const christmasPromotionManager = new ChristmasPromotionManager(
      orderList,
      date
    );
    const totalPrice = christmasPromotionManager.calculateAllOrderPrice();
    OutputView.printTotalPriceBeforePromotion(totalPrice);

    if (totalPrice < 10_000) {
      OutputView.printGiftMenu("없음");
      OutputView.printDiscountDetails("없음");
      OutputView.printTotalDiscountAmount(0);
      OutputView.printExpectedPaymentAfterDiscount(totalPrice);
      OutputView.printDecemberEventBadge("없음");
    }

    const discountDetail = christmasPromotionManager.fetchTotalDiscountInfo();
    OutputView.printDiscountDetails(discountDetail);

    const totalDiscountAmount =
      christmasPromotionManager.calculateTotalDiscount();
    OutputView.printTotalDiscountAmount(totalDiscountAmount);

    const expectedPayment =
      christmasPromotionManager.calculatePriceAfterPromotion();
    OutputView.printExpectedPaymentAfterDiscount(expectedPayment);
  }
}
