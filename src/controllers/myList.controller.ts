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

export const removeFromMyList = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedItem = await MyListItemModel.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found in the list' });
    }

    return res.status(200).json({ message: 'Item removed from the list' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllMyListItems = async (req: Request, res: Response) => {
  const { userId, page = 1, limit = 10 } = req.query;
  const skip = (parseInt(page as string, 10) - 1) * parseInt(limit as string, 10);

  try {
    const totalCount = await MyListItemModel.countDocuments({ userId });
    const itemList = await MyListItemModel.find({ userId }).skip(skip).limit(parseInt(limit as string, 10));

    return res.status(200).json({
      totalItems: totalCount,
      currentPage: parseInt(page as string, 10),
      pageSize: parseInt(limit as string, 10),
      items: itemList,
    });
  } catch (error) {
    console.error('Error retrieving items from list:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
