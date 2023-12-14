export default class DdayEvent {
  #day;
  #discountName = '크리스마스 디데이 할인';

  constructor(visitDay) {
    this.#day = visitDay;
  }

  checkEventAccess() {
    return 1 <= this.#day && this.#day <= 25;
  }

  calculateDiscount() {
    if (this.checkEventAccess()) {
      return 1_000 + (this.#day - 1) * 100;
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
