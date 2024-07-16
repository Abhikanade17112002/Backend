const router = require("express").Router();
const {
  handleUserSignIn,
  handleUserSignUp,
  handleUserSignOut,
} = require("../controllers/user.controller.js");



router
.get("/signup",(request,response)=>{
 response.render("../views/signup");
})
.post('/signup',handleUserSignUp) ;


router
.get("/signin",(request,response)=>{
  response.render("../views/signin");
 })
 .post('/signin',handleUserSignIn) ;

 router
 .get("/signout",handleUserSignOut)


module.exports = router ;