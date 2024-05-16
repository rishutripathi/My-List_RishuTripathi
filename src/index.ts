import express from 'express';
import mongoose from 'mongoose';
import myListRoutes from './routes/myList.routes';
import dotenv from 'dotenv';
dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI: string | any = process.env.MONGODB_URI;

app.use(express.json());
app.use('/mylist', myListRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
  
export default app;