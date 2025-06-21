// App.jsx
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ViewItems from './pages/ViewItems';
import AddItems from './pages/AddItems';

export default function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 flex gap-4">
        <NavLink to="/" className="text-blue-600">View Items</NavLink>
        <NavLink to="/add" className="text-green-600">Add Items</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItems />} />
      </Routes>
    </div>
  );
}
