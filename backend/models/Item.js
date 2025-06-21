import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  coverUrl: String,
  imageUrls: [String]
});

export default mongoose.model('Item', itemSchema);
