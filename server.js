import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const uri = process.env.MONGO_URI; 
// MongoDB connection
const client = new MongoClient(uri);
 
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("mod-13").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
 
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});