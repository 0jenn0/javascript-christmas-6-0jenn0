import { OrderItem, OrderItemInventory } from "../../src/Model";

const formatDescription = (items) => {
  return items.map((item) => `${item[0]}-${item[1]}`).join(", ");
};

jest.mock("../../src/Model/OrderItem");

describe("OrderItemInventory 클래스 테스트", () => {
  describe("총 가격 구하기", () => {
    const testCases = [
      {
        items: [
          ["티본스테이크", 2],
          ["레드와인", 1],
        ],
        expectedTotal: 170_000,
      },
      {
        items: [
          ["해산물파스타", 2],
          ["제로콜라", 2],
        ],
        expectedTotal: 76_000,
      },
    ];
    testCases.forEach(({ items, expectedTotal }) => {
      const description = formatDescription(items);
      test(`${description}의 총 가격은? ${expectedTotal}원`, () => {
        const mockedOrderItems = items.map(
          (item) => new OrderItem(item[0], item[1])
        );
        const orderItemInventory = new OrderItemInventory(mockedOrderItems);

        const totalPrice = orderItemInventory.calculateTotalPayment();

        expect(totalPrice).toBe(expectedTotal);
      });
    });
  });

  describe("카테고리 별 메뉴 개수 구하기", () => {
    const testCases = [
      {
        items: [
          ["티본스테이크", 2],
          ["레드와인", 1],
        ],
        category: "main",
        expectedQuantity: 2,
      },
      {
        items: [
          ["해산물파스타", 3],
          ["티본스테이크", 2],
          ["제로콜라", 2],
        ],
        category: "beverage",
        expectedQuantity: 2,
      },
    ];
    testCases.forEach(({ items, category, expectedQuantity }) => {
      const description = formatDescription(items);
      test(`${description}에서 ${category}의 개수는? ${expectedQuantity}개`, () => {
        const mockedOrderItems = items.map(
          (item) => new OrderItem(item[0], item[1])
        );
        const orderItemInventory = new OrderItemInventory(mockedOrderItems);

        const totalQuantity =
          orderItemInventory.sumQuantityByCategory(category);

        expect(totalQuantity).toBe(expectedQuantity);
      });
    });
  });

  describe("주문 메뉴들을 카테고리 별로 분류하기", () => {
    const testCases = [
      {
        items: [
          ["티본스테이크", 2],
          ["레드와인", 1],
        ],
        expected: {
          main: [{ menuName: "티본스테이크", quantity: 2 }],
          beverage: [{ menuName: "레드와인", quantity: 1 }],
        },
      },
      {
        items: [
          ["해산물파스타", 3],
          ["티본스테이크", 2],
          ["제로콜라", 2],
        ],
        expected: {
          main: [
            { menuName: "해산물파스타", quantity: 3 },
            { menuName: "티본스테이크", quantity: 2 },
          ],
          beverage: [{ menuName: "제로콜라", quantity: 2 }],
        },
      },
    ];
    testCases.forEach(({ items, expected }) => {
      const description = formatDescription(items);

      test(`${description}을 카테고리별로 분류하기`, () => {
        const mockedOrderItems = items.map(
          (item) => new OrderItem(item[0], item[1])
        );
        const orderItemInventory = new OrderItemInventory(mockedOrderItems);

        const categorizedOrderItems = orderItemInventory.categorizeOrderItems();

        expect(categorizedOrderItems).toEqual(expected);
      });
    });
  });
});
