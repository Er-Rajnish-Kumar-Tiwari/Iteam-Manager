
// 6. api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/items' });

export const fetchItems = () => API.get('/');
export const addItem = (formData) => API.post('/add', formData);
export const sendEnquiry = (itemId) => API.post(`/enquire/${itemId}`);