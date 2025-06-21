import Item from '../models/Item.js';
import cloudinary from '../config/cloudnary.js';
import nodemailer from 'nodemailer';

export const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

export const addItem = async (req, res) => {
  try {
    const { name, type, description } = req.body;
    const coverFile = req.files['cover'][0];
    const imageFiles = req.files['images'] || [];

    const uploadStream = buffer => new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (err, result) => {
        if (err) reject(err);
        else resolve(result.secure_url);
      });
      stream.end(buffer);
    });

    const coverUrl = await uploadStream(coverFile.buffer);

    const imageUrls = [];
    for (const file of imageFiles) {
      const url = await uploadStream(file.buffer);
      imageUrls.push(url);
    }

    const item = new Item({ name, type, description, coverUrl, imageUrls });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const sendEnquiry = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Item Catalog" <${process.env.EMAIL_USER}>`,
    to: process.env.ENQUIRY_RECEIVER,
    subject: `Enquiry about ${item.name}`,
    text: `Someone enquired about the item: ${item.name}\n\nDescription: ${item.description}`
  });

  res.json({ message: 'Enquiry email sent successfully' });
};
