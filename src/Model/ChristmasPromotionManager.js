export default class ChristmasPromotionManager {
  #orderItemList;

  constructor(orderItemList) {
    this.#orderItemList = orderItemList;
  }

  calculateAllOrderPrice() {
    const allOrderPrice = this.#orderItemList.reduce((accPrice, orderItem) => {
      accPrice += orderItem.calculateTotalPrice();
      return accPrice;
    }, 0);
    return allOrderPrice;
  }
}
