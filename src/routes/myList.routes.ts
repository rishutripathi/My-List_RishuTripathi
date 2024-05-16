import express from 'express';
import { addToMyList } from '../controllers/myList.controller';

const router = express.Router();

router.post('/add', addToMyList);

export default router;
