

const express = require("express") ;
const {createProduct,getAllProducts,getProductWithId,replaceProduct,updateProduct,deleteProduct} = require("../controllers/products")
const productRouter = express.Router() ;
//  C R U D
// create POST /products
productRouter.post("/" , createProduct ) ;
//  read GET /products
productRouter.get("/" , getAllProducts) ;
//  read GET /products/:id
productRouter.get("/:id" , getProductWithId) ;
//  update ( Override ) PUT /products/:id
productRouter.put("/:id" ,replaceProduct) ;
//  update ( replace ) PATCH /products/:id
productRouter.patch("/:id" , updateProduct) ;
//  delete  DELETE /products/:id
productRouter.delete("/:id" , deleteProduct) ;


module.exports = {productRouter}