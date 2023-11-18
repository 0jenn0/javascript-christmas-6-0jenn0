const prices = {
  티본스테이크: 55_000,
  레드와인: 60_000,
  해산물파스타: 35_000,
  제로콜라: 3_000,
};

const categories = {
  티본스테이크: 'main',
  레드와인: 'beverage',
  해산물파스타: 'main',
  제로콜라: 'beverage',
};

const mockOrderItem = (name, quantity) => ({
  calculateTotalPrice: jest.fn(() => prices[name] * quantity),
  findMenuCategory: jest.fn(() => categories[name]),
  getQuantity: jest.fn(() => quantity),
  getInfo: jest.fn(() => ({ menuName: name, quantity })),
});

export default mockOrderItem;
