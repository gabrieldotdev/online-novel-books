export function MainNav({ items }) {
  return (
    <div className="flex items-center space-x-4">
      {items.map((item) => (
        <h2 key={item.title}>{item.title}</h2>
      ))}
    </div>
  );
}
