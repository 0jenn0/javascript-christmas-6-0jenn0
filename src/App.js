import PromotionController from './Controller/PromotionController.js';

class App {
  async run() {
    const promotionController = new PromotionController();
    await promotionController.start();
  }
}

export default App;
