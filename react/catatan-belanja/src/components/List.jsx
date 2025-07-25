import { useState } from "react";
import Item from "./Item";

export default function List({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [search, setSearch] = useState("");

  let sortedItems;
  let searchedItem;

  if (search) {
    searchedItem = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (searchedItem) {
    sortedItems = searchedItem;
  } else if (sortBy === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "checked") {
    sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
  } else {
    sortedItems = items;
  }

  // if (sortBy === "name") {
  //   sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  // }

  // if (sortBy === "checked") {
  //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
  // }

  // function handleSearch(e) {
  //   const search = items.filter(
  //     (item) => item.name.toLowerCase() == e.target.value.toLowerCase()
  //   );
  //   setSearch(search);
  //   console.log(search);
  // }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <input
          type="text"
          placeholder="Cari barang"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onDeleteItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
