import AppError from '../Error/AppError.js';
import Menu from '../Models/Menu.js';

// 메뉴 주문당 검증하는 로직을 작성합니다.
const MenuOrderValidator = Object.freeze({
  checkFormat: (menuOrder) => {
    const regex = /^[가-힣]+-\d+$/;
    if (!regex.test(menuOrder)) {
      throw new AppError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  checkMenuName: (menuName) => {
    if (Menu.isExist(menuName) === false) {
      throw new AppError('메뉴판에 없는 메뉴 입니다. 다시 입력해 주세요.');
    }
  },

  checkAmount: (quantity) => {
    if (quantity < 1) {
      throw new AppError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  check: (name, quantity) => {
    MenuOrderValidator.checkMenuName(name);
    MenuOrderValidator.checkAmount(quantity);
  },
});

export default MenuOrderValidator;
