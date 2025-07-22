export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats">Daftar belanjaan masih koshong</footer>;
  }

  const checkedItems = items.filter((item) => item.checked === true);
  const persen = Math.round((checkedItems.length / items.length) * 100);

  return (
    <footer className="stats">
      Ada {items.length} barang di daftar belanjaan, {checkedItems.length}{" "}
      barang sudah dibeli ({persen}%)
    </footer>
  );
}
