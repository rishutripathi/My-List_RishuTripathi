import express from 'express';
import { addToMyList, removeFromMyList, getAllMyListItems } from '../controllers/myList.controller';

const router = express.Router();

router.post('/add', addToMyList);

router.delete('/remove/:id', removeFromMyList);

router.get('/list', getAllMyListItems);

export default router;
