const user = require("../models/user.model.js");
const post = require("../models/post.model")


const handleUserCreatePost = async (request , response ) =>{
  const currentUser = request.currentUser ;
  
  const {title,content} = request.body ;
 const createdPost = await post.create({
    title,
    content,
    createdBy:currentUser._id
 })

 await user.findOneAndUpdate(currentUser._id,{
    $push:{posts:createdPost._id}
 })
  response.status(200).redirect("/user/profile");
} ;


module.exports = {
    handleUserCreatePost
}