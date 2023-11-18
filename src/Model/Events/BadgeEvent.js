import { BADGE_EVENT } from '../../constants/eventConstants.js';

const {
  MIN_FOR_STAR,
  MIN_FOR_TREE,
  MIN_FOR_SANTA,
  STAR_REWARD,
  TREE_REWARD,
  SANTA_REWARD,
  NONE_REWARD,
} = BADGE_EVENT;

export default class BadgeEvent {
  #totalPayment;

  constructor(totalPayment) {
    this.#totalPayment = totalPayment;
  }

  determineBadgeAward() {
    if (this.#totalPayment >= MIN_FOR_SANTA) {
      return SANTA_REWARD;
    }
    if (this.#totalPayment >= MIN_FOR_TREE) {
      return TREE_REWARD;
    }
    if (this.#totalPayment >= MIN_FOR_STAR) {
      return STAR_REWARD;
    }
    return NONE_REWARD;
  }
}
