//1: create a post
//2: update a post
//3: delete a post
//4: search a post based on title
//6: get a post based on the posts ID
//5: get a user's post based on his userId

const express = require("express");
const blogRouter = express.Router();
const Post = require("../database/post");
const middleware = require("../middleware");

blogRouter.post("/", middleware, async (req, res) => {
  const body = req.body;
  try {
    const newPost = new Post(body);
    const savePost = await newPost.save();
    return res.status(200).json(savePost);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error });
  }
});

blogRouter.put("/:id", middleware, async (req, res) => {
  const body = req.body;
  try {
    const postUpdate = await Post.findByIdAndDelete(
      req.params.id,
      { $set: body },
      { new: true }
    );
    return res.status(200).json(postUpdate);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error });
  }
});

blogRouter.delete("/:id", middleware, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json("Post Deleted");
  } catch (error) {
    return res.status(500).json({ InternalServerError: error });
  }
});
blogRouter.get("/bulk", async (req, res) => {
  try {
    const allPost = await Post.find({}).sort({ createdAt: -1 });
    return res.status(200).json(allPost);
  } catch (error) {
    return res.status(500).json({
      Error: "Internal Server Error",
      error,
    });
  }
});
blogRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const searchFilter = {
      title: { $regex: query.search, $options: "i" },
    };
    const post = await Post.find(query.search ? searchFilter : null);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error });
  }
});

blogRouter.get("/:id", middleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ InternalServerError: error });
  }
});

blogRouter.get("/user/:userId", middleware, async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = blogRouter;
