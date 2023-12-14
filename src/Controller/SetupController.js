import ErrorHandler from '../Error/ErrorHandler.js';
import { MenuOrder } from '../Models/index.js';
import CommonValidator from '../Validator/CommonValidator.js';
import MenuOrderValidator from '../Validator/MenuOrderValidator.js';
import OrderValidator from '../Validator/OrderValidator.js';
import VisitDayValidator from '../Validator/VisitDayValidator.js';
import { InputView } from '../View/index.js';

export default class SetupController {
  async getVisitDay() {
    // 식당 방문 날짜 입력 받기
    const inputVisitDay = await InputView.promptVisitDay();
    CommonValidator.check(inputVisitDay);
    VisitDayValidator.check(inputVisitDay);
    return Number(inputVisitDay);
  }

  async getMenuOrders() {
    const inputMenus = await InputView.promptMenu();
    CommonValidator.check(inputMenus);
    inputMenus.forEach((inputMenu) => {
      MenuOrderValidator.checkFormat(inputMenu);
    });
    return inputMenus;
  }

  async setup() {
    const visitDay = await ErrorHandler(this.getVisitDay.bind(this));
    const inputMenus = await ErrorHandler(this.getMenuOrders.bind(this));

    console.log(visitDay, inputMenus);

    const menus = inputMenus.map((inputMenu) => {
      const [name, quantity] = inputMenu.split('-');
      MenuOrderValidator.check(name, quantity);
      return new MenuOrder(name, Number(quantity));
    });
    OrderValidator.check(menus);

    return { visitDay, menus };
  }
}
