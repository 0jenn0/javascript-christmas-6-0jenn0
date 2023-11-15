import { OutputView } from "../View/index.js";
import { ORDER_CONSTRAINTS } from "../constants/eventConstants.js";
import { MESSAGES } from "../constants/viewMessages.js";

export default class PromotionResultController {
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
    OutputView.printGiftMenu(MESSAGES.NONE);
    OutputView.printDiscountDetails(MESSAGES.NONE);
    OutputView.printTotalDiscountAmount(0);
    OutputView.printExpectedPaymentAfterDiscount(totalPrice);
    OutputView.printDecemberEventBadge(MESSAGES.NONE);
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

  handleEvent(totalPrice) {
    if (totalPrice < ORDER_CONSTRAINTS.MIN_ORDER_AMOUNT) {
      return this.announceNoEvent(totalPrice);
    }
    return this.announceEvent(this.#promotionManager);
  }

  printPromotionSummary() {
    const totalPrice = this.#orderItemInventory.calculateTotalPayment();
    OutputView.printTotalPriceBeforePromotion(totalPrice);

    this.handleEvent(totalPrice);
  }

  printMenuAndSummary() {
    this.printCategorizedMenu();
    this.printPromotionSummary();
  }
}
