const router = require("express").Router();
const Post = require("../model/post")

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


router.get("/getPosts", async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
});

module.exports = router;