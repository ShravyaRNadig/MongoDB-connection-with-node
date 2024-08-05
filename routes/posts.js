const router = require("express").Router();
const Post = require("../model/post")

router.post("/", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const newPost = new Post({
        title: title,
        description: description
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
});

module.exports = router;