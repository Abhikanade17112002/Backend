let data = require("../data.json")

const createProduct = (request, response) => {
  const newProduct = request.body;
  data.push(newProduct);
  response.status(201).json(newProduct);
};


const getAllProducts = (request , response) =>{
      response.status(200).json(data) ;
}


const getProductWithId = (request , response) =>{
      const productId = request.params.id ;
      const product = data.filter((product)=> Number(product.id)  === Number(productId))
      response.status(200).json(product) ;
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