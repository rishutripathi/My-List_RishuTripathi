import mongoose, { Schema, Document } from 'mongoose';

export interface MyListItem extends Document {
  userId: string;
  itemId: string;
}

const MyListItemSchema: Schema = new Schema({
  userId: { type: String, required: true },
  itemId: { type: String, required: true },
});

export default mongoose.model<MyListItem>('MyListItem', MyListItemSchema);
