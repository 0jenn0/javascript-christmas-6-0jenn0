import AppError from '../Error/AppError.js';

const OrderValidator = Object.freeze({
  //menus : Menus[]
  checkIsAllBevarage: (menus) => {
    const categories = menus.map((menu) => menu.getCategory());
    const isAllBevarage = categories.every((category) => category === '음료');

    if (isAllBevarage) {
      throw new AppError('음료만 주문할 수 없습니다. 다시 입력해 주세요.');
    }
  },

  checkDuplicate: (menus) => {
    const names = menus.map((menu) => menu.getName());
    const isDuplicate = names.length !== new Set(names).size;

    if (isDuplicate) {
      throw new AppError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  checkTotalQuantity: (menus) => {
    const totalQuantity = menus.reduce((acc, menu) => acc + menu.getQuantity(), 0);

    if (totalQuantity > 20) {
      throw new AppError('주문은 한 번에 최대 20개까지만 가능합니다. 다시 입력해 주세요.');
    }
  },

  check: (menus) => {
    OrderValidator.checkIsAllBevarage(menus);
    OrderValidator.checkDuplicate(menus);
    OrderValidator.checkTotalQuantity(menus);
  },
});

export default OrderValidator;
