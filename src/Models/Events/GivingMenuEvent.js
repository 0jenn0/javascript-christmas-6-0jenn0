import Menu from '../Menu.js';

export default class GivingMenuEvent {
  #totalPrice;
  #discountName = '증정 이벤트';

  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
  }

  checkEventAccess() {
    return this.#totalPrice >= 120_000;
  }

  calculateDiscount() {
    if (this.checkEventAccess()) {
      return Menu.getPrice('샴페인');
    }
    return 0;
  }

  getDiscountInfo() {
    return {
      discountName: this.#discountName,
      discount: this.calculateDiscount(),
    };
  }
}
