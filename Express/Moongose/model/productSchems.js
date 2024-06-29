const mongoose = require("mongoose")
const {Schema} = mongoose ;





const productsSchema = new Schema({
      
    title:{ type: String , require : true } ,
    description: { type: String , require : true } ,
    price:{ type: Number , require : true } ,
    category: { type: String , require : true } ,
    rating: { type: String  } 
})


const product = mongoose.model("product",productsSchema) ;


module.exports = product ;