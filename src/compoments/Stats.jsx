export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems) * 100;
  return (
    <footer className="stats">
      {percentage === 10}
      You have{numItems} items on your list , and you already packed {numPacked}
      {percentage}%
    </footer>
  );
}
