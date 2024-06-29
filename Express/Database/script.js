/*
MVC = to separate and handle code neatly 
Model =  data and bussiness rule related to data 
view = front end 
Controller = backend 
 */

const express = require("express") ;
const {productRouter} = require("./Routes/productRoute")
const App = express() ;



App.use("/api/products",productRouter)  ;
App.use( express.json() ) ; // Body Parser




const PORT = process.env.PORT || 8080 ;

App.listen(  PORT , ()=>{
      console.log(`Server Started At The Port ${PORT}`);
})
