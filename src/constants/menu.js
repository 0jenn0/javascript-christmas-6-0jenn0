import { deepFreeze } from "../utils/index.js";

export const MENU = deepFreeze({
  appetizer: [
    { name: "양송이수프", price: 6_000 },
    { name: "타파스", price: 5_500 },
    { name: "시저샐러드", price: 8_000 },
  ],
  main: [
    { name: "티본스테이크", price: 55_000 },
    { name: "바비큐립", price: 54_000 },
    { name: "해산물파스타", price: 35_000 },
    { name: "크리스마스파스타", price: 25_000 },
  ],
  dessert: [
    { name: "초코케이크", price: 15_000 },
    { name: "아이스크림", price: 5_000 },
  ],
  beverage: [
    { name: "제로콜라", price: 3_000 },
    { name: "레드와인", price: 60_000 },
    { name: "샴페인", price: 25_000 },
  ],
});

export const MENU_CATEGORIES = Object.freeze({
  appetizer: "에피타이저",
  main: "메인",
  dessert: "디저트",
  beverage: "음료",
});

const formatMenu = (menu) => {
  return Object.entries(menu)
    .map(([category, items]) => {
      const formattedItems = items
        .map((item) => `${item.name}(${item.price.toLocaleString()})`)
        .join(", ");
      return `<${MENU_CATEGORIES[category]}>\n${formattedItems}`;
    })
    .join("\n\n");
};

export const menuBoard = `
<메뉴판>------------------------------------------

${formatMenu(MENU)}

-------------------------------------------------
`;
