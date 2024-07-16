const router = require("express").Router() ;
const {handleSignInUser,handleSignOutUser,handleSignUpUser,handleUserPost} = require("../controllers/user.controller.js") ;
const isUserLoggedIn = require("../middleware/user.middleware.js");
const user = require("../models/user.model.js");

router
.get('/signin',(request,response)=>{
    response.status(200).render("../views/signin.ejs")
})
.post("/signin",handleSignInUser) ;

router
.get('/signup',(request,response)=>{
    response.status(200).render("../views/signup.ejs")
})
.post("/signup",handleSignUpUser) ;

router
.get('/signout',handleSignOutUser)


router
.get('/profile',isUserLoggedIn, async (request,response)=>{
    
    const currentUser = request.currentUser ;
    const currentUserPosts = await user.findOne({email:currentUser.email}).populate("posts") ;
    response.status(200).render("../views/profile.ejs",{currentUserPosts:currentUserPosts})
}) 


router
.post('/post',isUserLoggedIn,handleUserPost) ;



module.exports = router ;