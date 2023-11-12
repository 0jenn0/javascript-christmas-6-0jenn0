export default class BadgeEvent {
  #totalPayment;

  constructor(totalPayment) {
    this.#totalPayment = totalPayment;
  }

  determineBadgeAward() {
    if (this.#totalPayment >= 20_000) {
      return "산타";
    } else if (this.#totalPayment >= 10_000) {
      return "트리";
    } else if (this.#totalPayment >= 5_000) {
      return "별";
    }
    return "없음";
  }
}
