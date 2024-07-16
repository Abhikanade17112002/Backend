const mongoose = require("mongoose") ;


const postSchema = new mongoose.Schema({
    
    title : {
        type : String ,
        required : true,
        default:Date.now() 
        } ,
    content:{
        type : String ,
        required : true

    } ,
    createdBy:{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "user" ,
    },
    likes:[
        {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "user"
            }
    ]

},{timestamps:true}) ;



const post = mongoose.model("post",postSchema) ;
module.exports = post ;