const express = require("express") ;
let data = require("./data.json");
const App = express() ;



App.use( express.json() ) ; // Body Parser 


//  C R U D
// create POST /products


App.post("/products" , (request , response) =>{

      const newProduct = request.body ;
      data.push(newProduct) ;
      response.status(201).json(newProduct) ;
}) ;



//  read GET /products
App.get("/products" , (request , response) =>{
      response.status(200).json(data) ;
}) ;



//  read GET /products/:id
App.get("/products/:id" , (request , response) =>{
      const productId = request.params.id ;
      const product = data.filter((product)=> Number(product.id)  === Number(productId))
      response.status(200).json(product) ;
}) ;



//  update ( Override ) PUT /products/:id
App.put("/products/:id" , (request , response) =>{
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
}) ;

//  update ( replace ) PATCH /products/:id
App.patch("/products/:id" , (request , response) =>{
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
}) ;




//  delete  DELETE /products/:id
App.delete("/products/:id" , (request , response) =>{
      const productId = request.params.id ;
      
      
     data =  data.filter((product)=>{

                  if( Number(product.id) !== Number(productId) )
                  {
                     return product
                  }
                  
                  
      })
      response.status(202).json(data) ;
}) ;


const PORT = process.env.PORT || 8080 ;

App.listen(  PORT , ()=>{
      console.log(`Server Started At The Port ${PORT}`);
})
