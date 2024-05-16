import { Request, Response } from 'express';
import MyListItemModel, { MyListItem } from '../models/myListItem.model';

export const addToMyList = async (req: Request, res: Response) => {
  const { userId, itemId } = req.body;

  try {
    const existingItem = await MyListItemModel.findOne({ userId, itemId });
    if (existingItem) {
      return res.status(400).json({ message: 'Item already exists in the list' });
    }

    const newItem: MyListItem = new MyListItemModel({ userId, itemId });
    await newItem.save();

    return res.status(201).json({ message: 'Item added to the list' });
  } catch (error) {
    console.error('Error adding item to list:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
