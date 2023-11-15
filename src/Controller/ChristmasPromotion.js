import { OutputView } from '../View/index.js';
import PromotionSetupController from './PromotionSetupController.js';
import PromotionResultController from './PromotionResultController.js';

export default class ChristmasPromotion {
  static async start() {
    OutputView.printHello();

    const { visitDay, orderItemInventory, christmasPromotionManager } =
      await PromotionSetupController.initializePromotionSetup();

    const promotionResultPresenter = new PromotionResultController(
      christmasPromotionManager,
      orderItemInventory,
    );

    OutputView.printEventPreview(visitDay);
    promotionResultPresenter.printMenuAndSummary();
  }
}
