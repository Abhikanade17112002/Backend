/*
MVC = to separate and handle code neatly 
Model =  data and bussiness rule related to data 
view = front end 
Controller = backend 
 */

const express = require("express") ;
const mongoose = require("mongoose")


const connectDataBase = async () =>{
      try {
            await mongoose.connect('mongodb+srv://abhishekrangnathkanade21:geAlLUi5ooUeYH4b@abhishek.tmo4fe5.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Abhishek');
            
            console.log("DATABASE CONNECTED");
      } catch (error) {
            console.log("DATABASE ERROR :: " , error);
      }
}
connectDataBase() ;



const {productRouter} = require("./Routes/productRoute")
const App = express() ;
App.use( express.json() ) ; // Body Parser


App.use("/api/products",productRouter)  ;





const PORT = process.env.PORT || 8080 ;

App.listen(  PORT , ()=>{
      console.log(`Server Started At The Port ${PORT}`);
})
