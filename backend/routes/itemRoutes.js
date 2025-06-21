import express from 'express';
import { getItems, addItem, sendEnquiry } from '../controllers/itemController.js';
import { upload } from '../config/multer.js';

const router = express.Router();

router.get('/', getItems);
router.post(
  '/add',
  upload.fields([
    { name: 'cover', maxCount: 1 },
    { name: 'images', maxCount: 10 }
  ]),
  addItem
);
router.post('/enquire/:id', sendEnquiry);

export default router;
