const router = require("express").Router();
const Post = require("../model/post")

// Post API New post
router.post("/newPost", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const newPost = new Post({
        title: title,
        description: description
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
});

// Get Api get All post
router.get("/getPosts", async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
});

// Get Api get post by ID
router.get("/getPostsById/:postid", async (req, res) => {
    const _id = req.params.postid;
    const post = await Post.findById(_id);
    res.json(post);
});

// Edit API edit post by ID
router.put("/editPost/:postid",async (req, res) => {
    const _id = req.params.postid;
    await Post.findByIdAndUpdate(_id,{$set:{title: req.body.title ,description: req.body.description}});
    res.json({"Status": "Post Updated"});
});

// Patch API patch post by ID
router.patch("/patchDescp/:postid",async (req, res) => {
    const _id = req.params.postid;
    await Post.findByIdAndUpdate(_id,{$set:{description: req.body.description}});
    res.json({"Status": "Description Updated"});
});

// Delete API Delete one post by ID
router.delete("/deleteOnePost/:postid",async (req, res) => {
    const _id = req.params.postid;
    await Post.deleteOne({_id: _id});
    res.json({"Status": "1 Post Deleted"});
});

module.exports = router;