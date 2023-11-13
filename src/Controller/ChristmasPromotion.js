import { OutputView } from "../View/index.js";
import ChristmasPromotionManager from "../Service/ChristmasPromotionManager.js";
import { PromotionInputController } from "./index.js";

export default class ChristmasPromotion {
  static categorizeOrderItems(orderList) {
    const categorizedOrderItems = orderList.reduce((acc, orderItem) => {
      acc[orderItem.findMenuCategory()]
        ? acc[orderItem.findMenuCategory()].push(orderItem.getInfo())
        : (acc[orderItem.findMenuCategory()] = [orderItem.getInfo()]);
      return acc;
    }, {});
    return categorizedOrderItems;
  }

  static announceNoEvent(totalPrice) {
    OutputView.printGiftMenu("없음");
    OutputView.printDiscountDetails("없음");
    OutputView.printTotalDiscountAmount(0);
    OutputView.printExpectedPaymentAfterDiscount(totalPrice);
    OutputView.printDecemberEventBadge("없음");
  }

  static announceEvent(christmasPromotionManager) {
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

  static runEvent(totalPrice, christmasPromotionManager) {
    if (totalPrice < 10_000) {
      return this.announceNoEvent(totalPrice);
    }
    return this.announceEvent(christmasPromotionManager);
  }

  static async start() {
    OutputView.printHello();

    const { date, calendar, orderList } =
      await PromotionInputController.initializePromotionSetup();

    const categorizedOrderList = this.categorizeOrderItems(orderList);
    OutputView.printMenu(categorizedOrderList);

    const christmasPromotionManager = new ChristmasPromotionManager(
      orderList,
      date
    );

    const totalPrice = christmasPromotionManager.calculateAllOrderPrice();
    OutputView.printTotalPriceBeforePromotion(totalPrice);

    this.runEvent(totalPrice, christmasPromotionManager);
  }
}
