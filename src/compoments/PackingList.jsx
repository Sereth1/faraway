import { useState } from "react";

export default function PackingList({ items, onDeleteItem, onToggleItems }) {
  const [sortyBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortyBy === "input") sortedItems = items;
  if (sortyBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localCompare(b.description));

  if (sortyBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions"></div>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
