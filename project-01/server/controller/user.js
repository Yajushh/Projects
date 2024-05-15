const express = require("express");
const userRouter = express.Router();
const bcryptjs = require("bcryptjs");
const Auth = require("../database/auth");
const Post = require("../database/post");
const middleware = require("../middleware.js");

userRouter.get("/:id", async (req, res) => {
  try {
    const user = await Auth.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

userRouter.put("/:id", middleware, async (req, res) => {
  if (req.body.password) {
    const salt = bcryptjs.genSaltSync(10);
    req.body.password = bcryptjs.hashSync(req.body.password, salt);
  }
  try {
    const updateUser = await Auth.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

userRouter.delete("/:id", middleware, async (req, res) => {
  try {
    await Auth.findByIdAndDelete(req.params.id);
    await Post.deleteMany({ userId: req.params.id });
    res.status(200).json(`deleted : ${req.params.id}`);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;
