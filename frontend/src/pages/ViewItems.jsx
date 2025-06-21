// 8. ViewItems.jsx
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModal';

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchItems();
      setItems(res.data);
    };
    load();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} onClick={() => setSelectedItem(item)} />
      ))}
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}

