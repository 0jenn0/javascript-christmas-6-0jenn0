import { OrderItem } from '../../src/Model/index.js';

describe('OrderItem 클래스 테스트', () => {
  describe('해당 주문 메뉴의 총금액 구하기', () => {
    test.each([
      ['바비큐립', 2, 108_000],
      ['초코케이크', 1, 15_000],
    ])('%s %d개의 가격은? %d원', (menuName, quantity, expected) => {
      const orderItem = new OrderItem(menuName, quantity);
      expect(orderItem.calculateTotalPrice()).toBe(expected);
    });
  });

  describe('해당 주문 메뉴의 카테고리 구하기', () => {
    test.each([
      ['양송이수프', 'appetizer'],
      ['해산물파스타', 'main'],
      ['초코케이크', 'dessert'],
      ['샴페인', 'beverage'],
    ])('%s의 메뉴 카테고리는? %s', (menuName, expected) => {
      const orderItem = new OrderItem(menuName, 1);
      expect(orderItem.findMenuCategory()).toBe(expected);
    });
  });
});
