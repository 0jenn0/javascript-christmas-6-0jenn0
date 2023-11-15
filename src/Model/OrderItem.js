import { MENU } from '../constants/menuConstants.js';

export default class OrderItem {
  #menuName;

  #quantity;

  constructor(menuName, quantity) {
    this.#menuName = menuName;
    this.#quantity = Number(quantity);
  }

  calculateTotalPrice() {
    const menuPrice = Object.values(MENU)
      .flat()
      .find((item) => item.name === this.#menuName).price;
    return menuPrice * this.#quantity;
  }

  findMenuCategory() {
    return Object.keys(MENU).find((category) =>
      MENU[category].some((item) => item.name === this.#menuName)
    );
  }

  getQuantity() {
    return this.#quantity;
  }

  getInfo() {
    const menuName = this.#menuName;
    const quantity = this.#quantity;
    return { menuName, quantity };
  }
}
