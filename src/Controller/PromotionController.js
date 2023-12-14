import { InputView, OutputView } from '../View/index.js';

import {
  BadgeEvent,
  DdayEvent,
  GivingMenuEvent,
  SpecialEvent,
  WeeklongEvent,
} from '../Models/Events/index.js';

import { SetupController, ResultController } from './index.js';
import { Console } from '@woowacourse/mission-utils';

export default class PromotionController {
  #setupController = new SetupController();
  #resultController = new ResultController();

  async start() {
    OutputView.printStartMessage();

    const { visitDay, menus } = await this.#setupController.setup();

    OutputView.printAnouncement(visitDay);

    // <주문 메뉴> 출력하기
    OutputView.printOrderMenus(menus);

    // <할인 전 총주문 금액> 출력하기
    const totalPrice = menus.reduce((total, menu) => {
      return total + menu.getPrice();
    }, 0);
    OutputView.printTotalPrice(totalPrice);

    //  <증정 메뉴> 출력하기
    let givingMenu = '';
    if (totalPrice >= 120_000) {
      givingMenu = '샴페인';
    } else {
      givingMenu = '없음';
    }

    OutputView.printGivingMenu(givingMenu);

    // <혜택 내역> 출력하기
    const ddayEvent = new DdayEvent(visitDay);
    const givingMenuEvent = new GivingMenuEvent(totalPrice);
    const specialEvent = new SpecialEvent(visitDay);
    const weeklongEvent = new WeeklongEvent(visitDay, menus);

    const allEvents = [ddayEvent, weeklongEvent, specialEvent, givingMenuEvent];

    const events = allEvents.filter((event) => {
      return event.calculateDiscount() > 0;
    });

    const totalDiscount = events.reduce((total, event) => {
      return total + event.calculateDiscount(menus);
    }, 0);

    Console.print(`\n<혜택 내역>`);
    if (events.length === 0) {
      OutputView.printNoEvent();
    } else {
      events.forEach((event) => {
        const { discountName, discount } = event.getDiscountInfo();
        OutputView.printEvent(discountName, discount);
      });
    }

    // <총혜택 금액> 출력하기
    const totalBenefit = totalDiscount + givingMenuEvent.calculateDiscount();
    OutputView.printTotalBenefit(totalBenefit);

    // <할인 후 예상 결제 금액> 출력하기
    const expectedPrice = totalPrice - totalDiscount;
    OutputView.printExpectedPrice(expectedPrice);

    //  <12월 이벤트 배지> 출력하기
    const badgeEvent = new BadgeEvent(totalPrice);
    const badge = badgeEvent.getBadge();
    OutputView.prinBadge(badge);
  }
}
