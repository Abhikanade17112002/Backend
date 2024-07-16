const user = require("../models/user.model.js");
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const { default: mongoose } = require("mongoose");

const handleUserSignIn = async (request , response ) =>{
    const { email , password } = request.body ;
    const requiredUser = await user.findOne({email:email}) ;

   if( !requiredUser )
   {
    response.status(500).json({
        "message" : "USER NOT FOUND" 
    })
   }
   else
   {
    bcrypt.compare(password, requiredUser.passWord, function(err, res) {
        // res === true
        if( res )
        {
            const token = jwt.sign({"token": requiredUser.email},process.env.JWTSECRET);
            response.status(200).cookie("token",token);
            response.status(200).json({"message":"SUCCESS"}) ;
        }
        else {
            response.status(500).json({
                "message" : "USER NOT FOUND !!!!!!!!!" 
            })
        }
    });
   }
    
  

} ;
const handleUserSignUp =  (request , response ) =>{
    const { firstname , lastname , username , email , password } = request.body ;
    
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async (err, hash) => {
           const newUser = await user.create({
            firstName : firstname , lastName:lastname , userName:username , email:email , passWord: hash
           });

           response.status(200).json({
            message : "User created successfully",
            user:newUser
           })
        });
    });


    console.log({ firstname , lastname , username , email , password });
   
} ;
const handleUserSignOut = async (request , response ) =>{
    response.cookie("token","");
    response.status(200).render("../views/signout");
} ;


module.exports = {
    handleUserSignIn,
    handleUserSignUp,
    handleUserSignOut
}