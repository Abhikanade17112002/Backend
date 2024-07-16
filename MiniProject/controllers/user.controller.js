
const user = require("../models/user.model.js") ;
const post = require("../models/post.model.js") ;
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") ;
const handleSignInUser = async (request,response)=>{
    const {  email , password } = request.body ;
    console.log(request.body);
    const requiredUser = await user.findOne({email : request.body.email})

    if(requiredUser  === null )
    {
        response.status(500).json({
            message:"User not found"
        });
    }
    else
    {
        bcrypt.compare(password, requiredUser.password, function(err, result) {
            // result == true
            if( result  )
            {
                const token = jwt.sign({id : requiredUser._id , email : email} , process.env.JWTSECRETE) ;
                response.cookie( "token",token) ;
               
               response.status(200).redirect("/user/profile") ;
            }
        });
    }
    
    
}

const handleSignUpUser = (request,response)=>{
const { firstname , lastname , email , username , password } = request.body ;
console.log({firstname , lastname , email , username , password });
bcrypt.genSalt(10,  (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
         const newUser = await user.create({
            firstname , lastname , email , username , password : hash
         })
         const token = jwt.sign({id : newUser._id , email : email} , process.env.JWTSECRETE) ;
         response.cookie( "token",token) ;
         
         response.status(200).redirect("/user/profile") ;
    });
});

}

const handleSignOutUser = (request,response)=>{
    response.cookie("token","") ;
    response.redirect("/");

}

const handleUserPost = async (request , response ) =>{
    const { content } = request.body ;
    const currentUser = request.currentUser ;
    console.log(currentUser,content);
    const newPost = await post.create({
        
        content : content ,
        createdBy : currentUser.id ,
    });


   const x = await user.findOneAndUpdate(    {email:currentUser.email} ,{
    $push : {posts : newPost._id}
   } ) ;
   response.status(200).redirect("/user/profile");
}

module.exports = {
    handleSignInUser ,
    handleSignOutUser ,
    handleSignUpUser,
    handleUserPost
}
