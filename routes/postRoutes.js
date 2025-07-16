import express from 'express';
import { createPost,
    getAllPosts,
    findPostByAuthor,
    findPostNotHidden,
    findPostByid,
    updatePost,FindOneandUpdate,deltePost} from '../controllers/postController.js'; 
const router = express.Router();


// Endpoint to create a new post
router.post('/', createPost);
// get all posts
router.get('/', getAllPosts);

//get posts by author
router.get('/user/:username', findPostByAuthor);
router.get('/search',findPostNotHidden)
router.get('/:id',findPostByid)
router.patch('/:id',updatePost)
router.put('/',FindOneandUpdate)
router.delete('/',deltePost)






export default router;