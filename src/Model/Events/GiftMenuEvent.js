import { MENU } from "../../constants/menu.js";

export default class GiftMenuEvent {
  #totalPayment;

  constructor(totalPayment) {
    this.#totalPayment = totalPayment;
  }

  #canOfferEvent() {
    return this.#totalPayment >= 120_000;
  }

  calculateDiscounAmount() {
    if (this.#canOfferEvent()) {
      return Object.values(MENU)
        .flat()
        .find((item) => item.name === "샴페인").price;
    }
    return 0;
  }

  fetchDiscountInformation() {
    return {
      eventName: "증정 이벤트",
      discountAmount: this.calculateDiscounAmount(),
    };
  }
}
