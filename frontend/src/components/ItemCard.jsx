// 10. ItemCard.jsx
export default function ItemCard({ item, onClick }) {
  return (
    <div className="border p-4 cursor-pointer" onClick={onClick}>
      <img src={item.coverUrl} alt={item.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-bold text-lg">{item.name}</h3>
    </div>
  );
}
