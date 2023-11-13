import { OutputView } from "../View/index.js";
import ChristmasPromotionManager from "../Service/ChristmasPromotionManager.js";
import { PromotionInputController, PromotionViewController } from "./index.js";

export default class ChristmasPromotion {
  static async start() {
    OutputView.printHello();

    const { visitDay, orderItemList } =
      await PromotionInputController.initializePromotionSetup();

    const christmasPromotionManager = new ChristmasPromotionManager(
      orderItemList,
      visitDay
    );

    const promotionViewController = new PromotionViewController(
      christmasPromotionManager
    );

    promotionViewController.printCategorizedMenu(orderItemList);
    promotionViewController.printPromotionSummary();
  }
}
