import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/usersRoute.js';
import postRouter from './routes/postRoutes.js';

dotenv.config();
const app = express();

/// Middleware to parse JSON bodies
// This is necessary to handle JSON requests
app.use(express.json());

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI; 

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

// MongoDB connection
mongoose.connect(uri)
  .then(() => {
    console.log("Connected successfully to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});