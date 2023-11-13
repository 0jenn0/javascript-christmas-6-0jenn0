import { OutputView } from "../View/index.js";

export default class PromotionViewController {
  #promotionManager;

  constructor(christmasPromotionManager) {
    this.#promotionManager = christmasPromotionManager;
  }

  categorizeOrderItems(orderList) {
    const categorizedOrderItems = orderList.reduce((acc, orderItem) => {
      acc[orderItem.findMenuCategory()]
        ? acc[orderItem.findMenuCategory()].push(orderItem.getInfo())
        : (acc[orderItem.findMenuCategory()] = [orderItem.getInfo()]);
      return acc;
    }, {});
    return categorizedOrderItems;
  }

  printCategorizedMenu(orderList) {
    const categorizedOrderList = this.categorizeOrderItems(orderList);
    OutputView.printMenu(categorizedOrderList);
  }

  announceNoEvent(totalPrice) {
    OutputView.printGiftMenu("없음");
    OutputView.printDiscountDetails("없음");
    OutputView.printTotalDiscountAmount(0);
    OutputView.printExpectedPaymentAfterDiscount(totalPrice);
    OutputView.printDecemberEventBadge("없음");
  }

  announceEvent() {
    OutputView.printGiftMenu(this.#promotionManager.runGiftMenuEvent());

    const discountDetail = this.#promotionManager.fetchTotalDiscountInfo();
    OutputView.printDiscountDetails(discountDetail);

    const totalBenefitAmount = this.#promotionManager.calculateTotalBenefits();
    OutputView.printTotalDiscountAmount(totalBenefitAmount);

    const expectedPayment =
      this.#promotionManager.calculatePriceAfterPromotion();
    OutputView.printExpectedPaymentAfterDiscount(expectedPayment);

    const badge = this.#promotionManager.runBadgeEvent();
    OutputView.printDecemberEventBadge(badge);
  }

  runEvent(totalPrice) {
    if (totalPrice < 10_000) {
      return this.announceNoEvent(totalPrice);
    }
    return this.announceEvent(this.#promotionManager);
  }

  printPromotionSummary() {
    const totalPrice = this.#promotionManager.calculateAllOrderPrice();
    OutputView.printTotalPriceBeforePromotion(totalPrice);

    this.runEvent(totalPrice, this.#promotionManager);
  }
}
