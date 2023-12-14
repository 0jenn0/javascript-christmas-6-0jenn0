export default class BadgeEvent {
  #totalPrice;

  constructor(totalPrice) {
    this.#totalPrice = totalPrice;
  }

  getBadge() {
    if (this.#totalPrice >= 20_000) {
      return '산타';
    } else if (this.#totalPrice >= 10_000) {
      return '트리';
    } else if (this.#totalPrice >= 5_000) {
      return '별';
    }
    return '없음';
  }
}
