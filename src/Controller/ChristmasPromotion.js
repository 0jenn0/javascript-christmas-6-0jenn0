import { OutputView } from '../View/index';
import PromotionSetupController from './PromotionSetupController';
import PromotionResultController from './PromotionResultController';

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
