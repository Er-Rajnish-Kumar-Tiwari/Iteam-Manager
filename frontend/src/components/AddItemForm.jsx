// 9 AddItemForm.jsx

import React, { useState } from 'react';
import { addItem } from '../api';

export default function AddItemForm() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    description: '',
    cover: null,
    images: [],
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'cover') setForm({ ...form, cover: files[0] });
    else setForm({ ...form, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('type', form.type);
    data.append('description', form.description);
    data.append('cover', form.cover);
    for (let img of form.images) data.append('images', img);
    await addItem(data);
    setMessage('Item successfully added');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
      <input name="name" placeholder="Item Name" className="border p-2" onChange={handleChange} required />
      <input name="type" placeholder="Item Type" className="border p-2" onChange={handleChange} required />
      <textarea name="description" placeholder="Item Description" className="border p-2" onChange={handleChange} required />
      <input type="file" name="cover" onChange={handleFileChange} accept="image/*" required />
      <input type="file" name="images" onChange={handleFileChange} accept="image/*" multiple required />
      <button className="bg-green-500 text-white px-4 py-2" type="submit">Add Item</button>
      {message && <p className="text-green-700">{message}</p>}
    </form>
  );
}


