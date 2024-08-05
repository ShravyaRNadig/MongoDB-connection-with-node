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

router.get("/getPostsById/:postid", async (req, res) => {
    const _id = req.params.postid;
    const post = await Post.findById(_id);
    res.json(post);
});

router.patch("/editDescp/:postid",async (req, res) => {
    const _id = req.params.postid;
    await Post.findByIdAndUpdate(_id,{$set:{description: req.body.description}});
    res.json({"Status": "Updated"});
})

module.exports = router;