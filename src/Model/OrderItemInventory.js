export default class OrderItemInventory {
  #orderItemList;

  constructor(orderItemList) {
    this.#orderItemList = orderItemList;
  }

  sumQuantityByCategory(category) {
    return this.#orderItemList.reduce((total, orderItem) => {
      const newTotal =
        orderItem.findMenuCategory() === category
          ? total + orderItem.getQuantity()
          : total;
      return newTotal;
    }, 0);
  }

  categorizeOrderItems() {
    return this.#orderItemList.reduce((acc, orderItem) => {
      const category = orderItem.findMenuCategory();
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(orderItem.getInfo());
      return acc;
    }, {});
  }

  calculateTotalPayment() {
    return this.#orderItemList.reduce((total, orderItem) => {
      const newTotal = total + orderItem.calculateTotalPrice();
      return newTotal;
    }, 0);
  }
}
