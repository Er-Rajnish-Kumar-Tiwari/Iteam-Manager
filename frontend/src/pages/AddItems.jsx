// 7 AddItems.jsx
import React from 'react';
import AddItemForm from '../components/AddItemForm';

export default function AddItems() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-center">Add New Item</h1>
      <AddItemForm />
    </div>
  );
}
