import { SYMBOLS } from '../constants/symbol.js';
import { MENU_CATEGORIES_KOR } from '../constants/menuConstants.js';

export default function formatForMenuBoard(menu) {
  return Object.entries(menu)
    .map(([category, items]) => {
      const formattedItems = items
        .map((item) => `${item.name}(${item.price.toLocaleString()})`)
        .join(SYMBOLS.COMMA_SPACE);
      return `<${MENU_CATEGORIES_KOR[category]}>\n${formattedItems}`;
    })
    .join('\n\n');
}
