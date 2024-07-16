const userRouter = require("express").Router();
const user = require("../models/user.model.js");
const post = require("../models/post.model")


const {
  handleUserCreatePost,
  handleUserGetPost,
} = require("../controllers/user.controller.js");

userRouter.get("/profile", async (request, respone) => {
  const currentLoggedInUser = request.currentUser ;
  const currentUserPosts = await user.findOne({_id:currentLoggedInUser._id}).populate("posts")

    // respone.json(currentUserPosts.posts)
  respone.render("../views/profile.ejs",{
    currentUserPosts:{
      posts:currentUserPosts.posts ,
      user:currentLoggedInUser.username
    }
  });
});

userRouter.post("/post", handleUserCreatePost);

module.exports = {
  userRouter,
};
