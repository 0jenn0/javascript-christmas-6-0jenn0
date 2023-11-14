import { OutputView } from "../View/index.js";
import ChristmasPromotionManager from "../Service/ChristmasPromotionManager.js";
import { PromotionInputController, PromotionViewController } from "./index.js";

export default class ChristmasPromotion {
  static async start() {
    OutputView.printHello();
    const { visitDay, orderItemInventory } =
      await PromotionInputController.initializePromotionSetup();

    const christmasPromotionManager = new ChristmasPromotionManager(
      orderItemInventory,
      visitDay
    );

    const promotionViewController = new PromotionViewController(
      christmasPromotionManager,
      orderItemInventory
    );

    OutputView.printEventPreview(visitDay);
    promotionViewController.printMenuAndSummary();
  }
}
