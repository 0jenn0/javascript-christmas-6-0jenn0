import { GIFT_EVENT, MENU, DISCOUNT_TITLES } from "../../constants/index.js";

const { MIN_AMOUNT, GIFT_ITEM } = GIFT_EVENT;

export default class GiftMenuEvent {
  #totalPayment;

  constructor(totalPayment) {
    this.#totalPayment = totalPayment;
  }

  canOfferEvent() {
    return this.#totalPayment >= MIN_AMOUNT;
  }

  calculateDiscountAmount() {
    if (this.canOfferEvent()) {
      return Object.values(MENU)
        .flat()
        .find((item) => item.name === GIFT_ITEM).price;
    }
    return 0;
  }

  fetchDiscountInformation() {
    return {
      discountTitle: DISCOUNT_TITLES.GIFT_EVENT,
      discountAmount: this.calculateDiscountAmount(),
    };
  }
}
