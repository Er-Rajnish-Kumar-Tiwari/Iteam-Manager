
// 6. api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://iteam.onrender.com/api/items' });

export const fetchItems = () => API.get('/');
export const addItem = (formData) => API.post('/add', formData);
export const sendEnquiry = (itemId) => API.post(`/enquire/${itemId}`);