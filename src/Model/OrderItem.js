import { MENU } from "../constants/menu.js";

export default class OrderItem {
  #menuName;
  #quantity;

  constructor(menuName, quantity) {
    this.#menuName = menuName;
    this.#quantity = quantity;
  }

  calculateTotalPrice() {
    const menuPrice = Object.values(MENU)
      .flat()
      .find((item) => item.name === this.#menuName).price;
    return menuPrice * this.#quantity;
  }
}
