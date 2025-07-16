import express from 'express'
import {createUser,getAllUsers,getUserById,updateUserById,findUserByUsername} from '../controllers/userController.js'; // Import the createUser controller
const router = express.Router();




/// Endpoint to create a new user
// This endpoint will handle POST requests to create a new user
router.post('/', createUser);


// get all users
router.get('/', getAllUsers);

// get user by id
router.get('/:id', getUserById);

// Update user by id
router.put('/:id', updateUserById);

//find user by username
router.get('/username/:username',findUserByUsername);

//Root Routes
router.get('/', (req, res) => {
  res.send('Connected successfully to MongoDB!');
});

export default router;