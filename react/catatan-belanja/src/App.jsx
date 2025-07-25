import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([]);

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
