import MENU from '../Constants/Menu.js';

export default class Menu {
  static #menu = MENU;

  static findCategory = (menuName) => {
    const category = Object.keys(Menu.#menu).find((category) =>
      Menu.#menu[category].find((menu) => menu.name === menuName),
    );
    return category;
  };

  static getPrice = (menuName) => {
    const price = Menu.#menu[Menu.findCategory(menuName)].find(
      (menu) => menu.name === menuName,
    ).price;
    return price;
  };

  static isExist = (menuName) => {
    const category = Menu.findCategory(menuName);
    if (!category) {
      return false;
    }
    return true;
  };
}
