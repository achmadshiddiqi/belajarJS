import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    const nextItems = [...items, item];
    setItems(nextItems);
  }

  function handleDeleteItem(id) {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  }

  function handleToggleItem(id) {
    const nextItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(nextItems);
  }

  function handleDeleteItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
      />
      <Footer items={items} />
    </div>
  );
}
