const router = require("express").Router() ;
const path = require("path")

router.get("/" , (request , response )=>{
 
      // console.log(__dirname);
      
      response.render("index" , {
        title: "Ny ejs Home Page" ,
        content : "Welcome To My ejs Home Page " 
      }) ;
  
  
  })
  router.get('/about' , (request , response )=>{
   
  
        
        response.render("about" , {
          title: "Ny ejs About Page" ,
          content : "Welcome To My ejs About Page " 
        }) ;
    
    
    })



    module.exports = router ;