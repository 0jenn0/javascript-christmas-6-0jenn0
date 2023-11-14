export default class OrderItemInventory {
  #orderItemList;

  constructor(orderItemList) {
    this.#orderItemList = orderItemList;
  }

  sumQuantityByCategory(category) {
    const totalQuantity = this.#orderItemList.reduce(
      (accMenuNum, orderItem) => {
        if (orderItem.findMenuCategory() === category) {
          accMenuNum += orderItem.getQuantity();
          return accMenuNum;
        }
        return accMenuNum;
      },
      0
    );
    return totalQuantity;
  }

  categorizeOrderItems() {
    const categorizedOrderItems = this.#orderItemList.reduce(
      (acc, orderItem) => {
        acc[orderItem.findMenuCategory()]
          ? acc[orderItem.findMenuCategory()].push(orderItem.getInfo())
          : (acc[orderItem.findMenuCategory()] = [orderItem.getInfo()]);
        return acc;
      },
      {}
    );
    return categorizedOrderItems;
  }

  calculateTotalPayment() {
    const totalPayment = this.#orderItemList.reduce((accPrice, orderItem) => {
      accPrice += orderItem.calculateTotalPrice();
      return accPrice;
    }, 0);
    return totalPayment;
  }
}
