import { useState } from "react";
import Form from "./compoments/Form";
import Logo from "./compoments/Logo";
import PackingList from "./compoments/PackingList";
import Stats from "./compoments/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteitem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handeToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteitem}
        onToggleItems={handeToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
