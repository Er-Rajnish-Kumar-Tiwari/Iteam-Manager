// 11. ItemModal.jsx
import React from 'react';
import Carousel from './Carousel';
import { sendEnquiry } from '../api';

export default function ItemModal({ item, onClose }) {
  const handleEnquire = async () => {
    await sendEnquiry(item._id);
    alert('Enquiry sent!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-full max-w-xl">
        <button className="float-right text-red-500" onClick={onClose}>X</button>
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="mb-2">{item.description}</p>
        <Carousel images={[item.coverUrl, ...item.imageUrls]} />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2" onClick={handleEnquire}>Enquire</button>
      </div>
    </div>
  );
}

