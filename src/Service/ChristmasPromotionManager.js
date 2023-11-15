import Calendar from "../Model/Calendar.js";
import {
  BadgeEvent,
  DdayEvent,
  GiftMenuEvent,
  SpecialEvent,
  WeeklongEvent,
} from "../Model/Events/index.js";
import { GIFT_EVENT, ORDER_CONSTRAINTS } from "../constants/eventConstants.js";

export default class ChristmasPromotionManager {
  #orderItemInventory;
  #calendar;

  constructor(orderItemInventory, day) {
    this.#orderItemInventory = orderItemInventory;
    this.#calendar = new Calendar(day);
  }

  #initDiscountEvents() {
    const dDayEvent = new DdayEvent(this.#calendar);
    const weeklongEvent = new WeeklongEvent(
      this.#orderItemInventory,
      this.#calendar
    );
    const specialEvent = new SpecialEvent(this.#calendar);
    const priceBeforePromotion =
      this.#orderItemInventory.calculateTotalPayment();
    const giftMenuEvent = new GiftMenuEvent(priceBeforePromotion);
    return { dDayEvent, weeklongEvent, specialEvent, giftMenuEvent };
  }

  calculatePriceAfterPromotion() {
    const priceBeforePromotion =
      this.#orderItemInventory.calculateTotalPayment();
    if (priceBeforePromotion >= ORDER_CONSTRAINTS.MIN_ORDER_AMOUNT) {
      const totalDiscount = this.#calculateTotalDiscount();
      return priceBeforePromotion - totalDiscount;
    }
    return priceBeforePromotion;
  }

  #calculateTotalDiscount() {
    const events = this.#initDiscountEvents();
    const { giftMenuEvent, ...remainingEvents } = events;
    const totalDiscount = this.#calculateDiscountSum(remainingEvents);
    return totalDiscount;
  }

  calculateTotalBenefits() {
    const events = this.#initDiscountEvents();
    const totalDiscount = this.#calculateDiscountSum(events);
    return totalDiscount;
  }

  #calculateDiscountSum(events) {
    const totalDiscount = Object.values(events).reduce((acc, event) => {
      acc += event.calculateDiscountAmount();
      return acc;
    }, 0);
    return totalDiscount;
  }

  fetchTotalDiscountInfo() {
    const events = this.#initDiscountEvents();
    const tatalDiscountInfo = Object.values(events).reduce((acc, event) => {
      if (event.calculateDiscountAmount() !== 0) {
        acc.push(event.fetchDiscountInformation());
      }
      return acc;
    }, []);
    return tatalDiscountInfo;
  }

  runBadgeEvent() {
    const totalPayment = this.#orderItemInventory.calculateTotalPayment();
    const badgeEvent = new BadgeEvent(totalPayment);
    return badgeEvent.determineBadgeAward();
  }

  runGiftMenuEvent() {
    const { GIFT_ITEM, GIFT_ITEM_QUANTITY, NONE_GIFT } = GIFT_EVENT;
    const totalPayment = this.#orderItemInventory.calculateTotalPayment();
    const giftMenuEvent = new GiftMenuEvent(totalPayment);
    if (giftMenuEvent.canOfferEvent()) {
      return `${GIFT_ITEM} ${GIFT_ITEM_QUANTITY}개`;
    }
    return NONE_GIFT;
  }
}
