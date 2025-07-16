import Post from '../modles/Postmodles.js'; // Import the Post model


const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(400).json({ message: error.message });
  }
};


const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const findPostByAuthor = async (req, res) => {
  const { username } = req.params;
  try {
    const posts = await Post.find({ author: username });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts by author:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

///
const findPostNotHidden =async(req,res)=>{
    const {author,hidden}=req.query
    try {
        const posts=await Post.find({$or: [{author},{hidden}]})
        res.status(200).json(posts)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//FInd by is post
const findPostByid= async (req,res)=> {
    const {id}=req.params
    try {
        const posts= await Post.find(id)
        res.status(200).json(posts)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

//Update Post By Id
const updatePost =async (req,res) =>{
const {id}=req.params

try {
    const updatepost = await Post.findByIdAndUpdate(id,req.body,{
        new:true
    })
    res.status(200).json(updatepost)
} catch (error) {
     console.error(error)
        res.status(500).json({ message: "Internal Server Error" });
}

}
//FindOneandUpdate or create if it doesn't
const FindOneandUpdate =async (req,res)=>{
try {
    const updatepost = await Post.findOneAndUpdate(
        {title:"A Brand New Post"},req.body,
        {new:true,upsert:true})
        res.json(updatepost)
} catch (error) {
    console.error(error)
        res.status(500).json({ message: "Internal Server Error" });
}
}
// Delete Post 

const deltePost =async (req,res)=>{
    try {
        const deletepost = await Post.findByIdAndDelete(req.params.id)
        res.json(deletepost)
    } catch (error) {
         console.error(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export { 
    createPost, getAllPosts,
     findPostByAuthor,findPostNotHidden,findPostByid,updatePost,FindOneandUpdate,deltePost};