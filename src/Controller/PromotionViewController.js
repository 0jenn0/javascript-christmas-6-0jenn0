import { OutputView } from "../View/index.js";

export default class PromotionViewController {
  #promotionManager;
  #orderItemInventory;

  constructor(christmasPromotionManager, orderItemInventory) {
    this.#promotionManager = christmasPromotionManager;
    this.#orderItemInventory = orderItemInventory;
  }

  printCategorizedMenu() {
    const categorizedOrderList =
      this.#orderItemInventory.categorizeOrderItems();
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
    const totalPrice = this.#orderItemInventory.calculateTotalPayment();
    OutputView.printTotalPriceBeforePromotion(totalPrice);

    this.runEvent(totalPrice, this.#promotionManager);
  }

  printMenuAndSummary() {
    this.printCategorizedMenu();
    this.printPromotionSummary();
  }
}
