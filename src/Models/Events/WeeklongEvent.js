export default class WeeklongEvent {
  #date;
  #discountName;
  #menus;

  constructor(day, menus) {
    this.#date = new Date(2023, 11, day);
    this.#discountName = this.checkIsWeekend() ? '주말 할인' : '평일 할인';
    this.#menus = menus;
  }

  checkEventAccess() {
    return 1 <= this.#date.getDate() && this.#date.getDate() <= 31;
  }

  //menus: MenuOrder[]
  calculateDiscount() {
    if (this.checkEventAccess()) {
      const isWeekend = this.checkIsWeekend();
      if (isWeekend) {
        return this.calculateWeekendDiscount(this.#menus);
      }
      return this.calculateWeekDiscount(this.#menus);
    }
    return 0;
  }

  // 주말은 금,토
  checkIsWeekend() {
    return this.#date.getDay() === 5 || this.#date.getDay() === 6;
  }

  calculateWeekendDiscount() {
    const mainMenus = this.#menus.filter((menu) => menu.getCategory() === '메인');
    const mainNums = mainMenus.reduce((total, menu) => {
      return total + menu.getQuantity();
    }, 0);

    return mainNums * 2_023;
  }

  calculateWeekDiscount() {
    const desertMenus = this.#menus.filter((menu) => menu.getCategory() === '디저트');
    const desertNums = desertMenus.reduce((total, menu) => {
      return total + menu.getQuantity();
    }, 0);

    return desertNums * 2_023;
  }

  getDiscountInfo() {
    return {
      discountName: this.#discountName,
      discount: this.calculateDiscount(),
    };
  }
}
