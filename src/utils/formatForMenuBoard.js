export default function formatForMenuBoard(menu) {
  return Object.entries(menu)
    .map(([category, items]) => {
      const formattedItems = items
        .map((item) => `${item.name}(${item.price.toLocaleString()})`)
        .join(", ");
      return `<${MENU_CATEGORIES[category]}>\n${formattedItems}`;
    })
    .join("\n\n");
}
