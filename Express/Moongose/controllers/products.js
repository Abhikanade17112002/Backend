let data = require("../data.json")

const productModel = require("../model/productSchems") ;

const createProduct = (request, response) => {
  const newProduct = request.body;
//   console.log(request.body);
//   console.log(request.body);
  data.push(newProduct);
  const newproduct = new productModel({
   
        title: request.body.title,
        description:request.body.description,
      price: request.body.price,
        category: request.body.category,
        rating: request.body.rating
  })

  newproduct.save()

  response.status(201).json(newproduct);
// response.json({ok:"Ok"})
  
};


const getAllProducts = async(request , response) =>{
      const allProductsList = await productModel.find() ;
      response.status(200).json(allProductsList) ;
}


const getProductWithId = async(request , response) =>{
      const productId = request.params.id ;
      const productWithId = await productModel.findById(productId)
      response.status(200).json(productWithId) ;
}



const replaceProduct =  (request , response) =>{
      const productId = request.params.id ;
      const newProduct = request.body ;
      
     data =  data.map((product)=>{

                  if( Number(product.id) === Number(productId) )
                  {
                     const temp = {...newProduct}
                     return temp;
                  }
                  else
                  {
                        return product ;
                  }
                  
      })
      response.status(202).json(data) ;
}



const updateProduct = (request , response) =>{
      const productId = request.params.id ;
      const newProduct = request.body ;
      
     data =  data.map((product)=>{

                  if( Number(product.id) === Number(productId) )
                  {
                     const temp = {...product ,...newProduct}
                     return temp;
                  }
                  else
                  {
                        return product ;
                  }
                  
      })
      response.status(202).json(data) ;
}



const deleteProduct = (request , response) =>{
      const productId = request.params.id ;
      
      
     data =  data.filter((product)=>{

                  if( Number(product.id) !== Number(productId) )
                  {
                     return product
                  }
                  
                  
      })
      response.status(202).json(data) ;
}




module.exports = {createProduct,getAllProducts,getProductWithId,replaceProduct,updateProduct,deleteProduct}