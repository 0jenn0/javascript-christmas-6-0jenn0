export default class SpecialEvent {
  #date;
  #discountName = '특별 할인';

  constructor(day) {
    this.#date = new Date(2023, 11, day);
  }

  checkEventAccess() {
    return this.#date.getDate() === 25 || this.#date.getDay() === 0;
  }

  calculateDiscount() {
    if (this.checkEventAccess()) {
      return 1_000;
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
