import { OutputView } from "../View/index.js";
import ChristmasPromotionManager from "../Service/ChristmasPromotionManager.js";
import { PromotionInputController, PromotionViewController } from "./index.js";

export default class ChristmasPromotion {
  static async start() {
    OutputView.printHello();

    const { date, calendar, orderList } =
      await PromotionInputController.initializePromotionSetup();

    const christmasPromotionManager = new ChristmasPromotionManager(
      orderList,
      date
    );

    const promotionViewController = new PromotionViewController(
      christmasPromotionManager
    );

    promotionViewController.printCategorizedMenu(orderList);
    promotionViewController.printPromotionSummary();
  }
}
