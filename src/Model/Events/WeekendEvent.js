export default class WeekendEvent {
  #orderItemList;
  #day;
  #calendar;

  constructor(orderItemList, day, calendar) {
    this.#orderItemList = orderItemList;
    this.#day = day;
    this.#calendar = calendar;
  }

  #canOfferEvent() {
    const isWeekend = this.#calendar.isWeekend(this.#day);
    return isWeekend;
  }

  calculateDiscounAmount() {
    if (this.#canOfferEvent()) {
      return this.#calculateDiscounAmountByCategory("main");
    }
    return this.#calculateDiscounAmountByCategory("dessert");
  }

  fetchDiscountInformation() {
    return {
      eventName: this.#determineEventName(),
      discountAmount: this.calculateDiscounAmount(),
    };
  }

  #determineEventName() {
    let eventName = "";
    if (this.#canOfferEvent) {
      eventName = "주말 할인";
    }
    eventName = "평일 할인";

    return eventName;
  }

  #calculateDiscounAmountByCategory(category) {
    const categoryMenuNum = this.#orderItemList.reduce(
      (accMenuNum, orderItem) => {
        if (orderItem.findMenuCategory() === category) {
          accMenuNum += orderItem.getQuantity();
          return accMenuNum;
        }
        return accMenuNum;
      },
      0
    );
    const discount = categoryMenuNum * 2_023;
    return discount;
  }
}
