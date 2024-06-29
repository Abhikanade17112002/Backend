



const express = require("express") 
const path = require("path")
const app = express() ;

const PORT = process.env.PORT || 3000 ;



app.set("view engine","ejs")
app.get('/' , (request , response )=>{
 

    const filePath = path.join(__dirname,"views","index.ejs") ;
    response.render(filePath , {
      title: "Ny ejs Home Page" ,
      content : "Welcome To My ejs Home Page " 
    }) ;


})
app.get('/about' , (request , response )=>{
 

      const filePath = path.join(__dirname,"views" ,"about.ejs") ;
      response.render(filePath , {
        title: "Ny ejs About Page" ,
        content : "Welcome To My ejs About Page " 
      }) ;
  
  
  })


app.listen( PORT , ()=>{
      console.log(` Started Server , Listining On PORT ${PORT}`);
})