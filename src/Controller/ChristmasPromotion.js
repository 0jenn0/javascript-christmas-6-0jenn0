import OrderItemValidator from "../Validator/OrderItemValidator.js";
import { InputView, OutputView } from "../View/index.js";
import {
  Calendar,
  ChristmasPromotionManager,
  OrderItem,
} from "../Model/index.js";
import executeOrRetryAsync from "../utils/executeOrRetryAsync.js";

export default class ChristmasPromotion {
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

  static async start() {
    OutputView.printHello();

    const { date, calendar } = await executeOrRetryAsync(this.setupDate);
    const orderList = await executeOrRetryAsync(this.setupOrderList);

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
    OutputView.printGiftMenu(christmasPromotionManager.runGiftMenuEvent());

    const discountDetail = christmasPromotionManager.fetchTotalDiscountInfo();
    OutputView.printDiscountDetails(discountDetail);

    const totalBenefitAmount =
      christmasPromotionManager.calculateTotalBenefits();
    OutputView.printTotalDiscountAmount(totalBenefitAmount);

    const expectedPayment =
      christmasPromotionManager.calculatePriceAfterPromotion();
    OutputView.printExpectedPaymentAfterDiscount(expectedPayment);

    const badge = christmasPromotionManager.runBadgeEvent();
    OutputView.printDecemberEventBadge(badge);
  }
}
