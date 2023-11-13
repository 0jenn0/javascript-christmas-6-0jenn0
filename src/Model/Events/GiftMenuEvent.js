import { GIFT_EVENT } from "../../constants/eventConstants.js";
import { MENU } from "../../constants/menuConstants.js";

const { MIN_AMOUNT, GIFT_ITEM } = GIFT_EVENT;

export default class GiftMenuEvent {
  #totalPayment;

  constructor(totalPayment) {
    this.#totalPayment = totalPayment;
  }

  canOfferEvent() {
    return this.#totalPayment >= MIN_AMOUNT;
  }

  calculateDiscounAmount() {
    if (this.canOfferEvent()) {
      return Object.values(MENU)
        .flat()
        .find((item) => item.name === GIFT_ITEM).price;
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
