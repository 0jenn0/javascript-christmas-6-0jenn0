import { Calendar, OrderItem, OrderItemInventory } from '../../../src/Model';
import { WeeklongEvent } from '../../../src/Model/Events';

const formatDescription = (items) =>
  items.map((item) => `${item[0]}-${item[1]}`).join(', ');

describe('WeeklongEvent 클래스 테스트', () => {
  describe('주말에는 메인 메뉴 1개당 2,023원 할인이 된다.', () => {
    const testCase = [
      {
        orderlist: [
          ['티본스테이크', 3],
          ['제로콜라', 1],
        ],
        day: 1,
        numberOfMain: 3,
        expected: 2_023 * 3,
      },
      {
        orderlist: [
          ['티본스테이크', 1],
          ['제로콜라', 1],
        ],
        day: 2,
        numberOfMain: 1,
        expected: 2_023,
      },
    ];
    testCase.forEach(({ orderlist, day, numberOfMain, expected }) => {
      test(`메인 메뉴 개수가 ${numberOfMain}개 일 때 주말 할인 금액은? ${expected}원`, () => {
        const orderItemlist = orderlist.map(
          (order) => new OrderItem(order[0], order[1]),
        );
        const calendar = new Calendar(day);
        const orderItemInventory = new OrderItemInventory(orderItemlist);
        const weeklongEvent = new WeeklongEvent(orderItemInventory, calendar);

        expect(weeklongEvent.calculateDiscountAmount()).toBe(expected);
      });
    });
  });

  describe('평일에는 디저트 메뉴 1개당 2,023원 할인이 된다.', () => {
    const testCase = [
      {
        orderlist: [
          ['해산물파스타', 2],
          ['제로콜라', 1],
        ],
        day: 3,
        numberOfdessert: 0,
        expected: 0,
      },
      {
        orderlist: [
          ['티본스테이크', 1],
          ['초코케이크', 2],
        ],
        day: 4,
        numberOfdessert: 2,
        expected: 2_023 * 2,
      },
    ];

    testCase.forEach(({ orderlist, day, numberOfdessert, expected }) => {
      test(`디저트 메뉴 개수가 ${numberOfdessert}개 일 때 평일 할인 금액은? ${expected}원`, () => {
        const orderItemlist = orderlist.map(
          (order) => new OrderItem(order[0], order[1]),
        );
        const calendar = new Calendar(day);
        const orderItemInventory = new OrderItemInventory(orderItemlist);
        const weeklongEvent = new WeeklongEvent(orderItemInventory, calendar);

        expect(weeklongEvent.calculateDiscountAmount()).toBe(expected);
      });
    });
  });

  describe('할인 이름은 평일에는 평일 할인, 주말에는 주말 할인이다.', () => {
    const testWeekendCase = [
      {
        orderlist: [
          ['티본스테이크', 1],
          ['제로콜라', 1],
        ],
        day: 1,
        discountName: '주말 할인',
      },
    ];
    testWeekendCase.forEach(({ orderlist, day, discountName }) => {
      test(`${day}일은 주말이고, 할인 이름은 "${discountName}"이다.`, () => {
        const orderItemlist = orderlist.map(
          (menuName, quantity) => new OrderItem(menuName, quantity),
        );
        const calendar = new Calendar(day);
        const orderItemInventory = new OrderItemInventory(orderItemlist);
        const weeklongEvent = new WeeklongEvent(orderItemInventory, calendar);

        expect(weeklongEvent.fetchDiscountInformation().discountTitle).toBe(
          discountName,
        );
      });
    });

    const testWeekdayCase = [
      {
        orderlist: [
          ['티본스테이크', 1],
          ['제로콜라', 1],
        ],
        day: 3,
        discountName: '평일 할인',
      },
    ];
    testWeekdayCase.forEach(({ orderlist, day, discountName }) => {
      test(`${day}일은 평일이고, 할인 이름은 "${discountName}"이다.`, () => {
        const orderItemlist = orderlist.map(
          (menuName, quantity) => new OrderItem(menuName, quantity),
        );
        const calendar = new Calendar(day);
        const orderItemInventory = new OrderItemInventory(orderItemlist);
        const weeklongEvent = new WeeklongEvent(orderItemInventory, calendar);

        expect(weeklongEvent.fetchDiscountInformation().discountTitle).toBe(
          discountName,
        );
      });
    });
  });
});
