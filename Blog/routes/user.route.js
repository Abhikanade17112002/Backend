const userRouter = require("express").Router();
const user = require("../models/user.model.js");
const post = require("../models/post.model")
const multer  = require('multer')

const {
  handleUserCreatePost,
  handleUserGetPost,
} = require("../controllers/user.controller.js");



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   return  cb(null, "./public/userposts")
  },
  filename: function (req, file, cb) {
   
     return cb(null,  `${Date.now()}-${file.originalname}`.toString())
  }
})

const upload = multer({ storage: storage })




userRouter.get("/profile", async (request, respone) => {
  const currentLoggedInUser = request.currentUser ;
  const currentUserPosts = await user.findOne({_id:currentLoggedInUser._id}).populate("posts")
  
    // respone.json(currentUserPosts.posts)
    
 for( let i = 0 ; i < currentUserPosts.posts.length ; i++ )
 {
  console.log(currentUserPosts.posts[i].userPostImage);
 }
  respone.render("../views/profile.ejs",{
    currentUserPosts:{
      posts:currentUserPosts.posts ,
    
    },
    user:currentLoggedInUser,
    
    img:currentLoggedInUser.userProfileImage
  });
});

userRouter.post("/post",upload.single("post-image"), handleUserCreatePost);

userRouter.get("/like",async (request , response )=>{
  const likedPostId = request.query.id ;
   const likedUserId = request.currentUser._id ;

    const likedPost = await post.findOne({_id:likedPostId}) ;
    if( likedPost.likes.indexOf(likedUserId) !== -1 )
    {
      response.redirect("/");
    }
    else
    {
      await post.findOneAndUpdate({_id:likedPostId},{
        $push:{likes:likedUserId}
       })
    
        
       console.log(likedUserId,likedPostId);
       response.redirect("/");
    }
  
})
module.exports = {
  userRouter,
};
