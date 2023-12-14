import Menu from './Menu.js';

export default class MenuOrer {
  #name;
  #quantity;

  constructor(name, quantity) {
    this.#name = name;
    this.#quantity = quantity;
  }

  getName() {
    return this.#name;
  }

  getQuantity() {
    return this.#quantity;
  }

  getCategory() {
    return Menu.findCategory(this.#name);
  }

  getPrice() {
    return Menu.getPrice(this.#name) * this.#quantity;
  }
}
