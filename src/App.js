import { ChristmasPromotion } from './Controller/index.js';

class App {
  async run() {
    await ChristmasPromotion.start();
  }
}

export default App;
