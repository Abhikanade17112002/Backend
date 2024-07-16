require("dotenv").config();
const express = require("express");
const connectToMongoDB = require("../database/App.database.js");
const path = require("path");
const cookieParser = require("cookie-parser");
const userRouter = require("../routes/user.routes.js");

// App
const App = express();




//  Middlewares

App.set("view engine" , "ejs") ;
App.use(express.json()) ;
App.use(express.urlencoded({extended:true})) ;
App.use(express.static(path.join(__dirname,"public"))) ;
App.use(cookieParser()) ;



// Routes
App.get("/",(request,response)=>{
  response.status(200).render("index") ;
}) ;
App.use("/user",userRouter) ;
// DataBase Connection
connectToMongoDB()
  .then((connectionInstance) => {
    console.log(
      "Database Connected :: HOST => ",
      connectionInstance.connection.host
    );

    // Server
    App.listen(process.env.PORT, () => {
      console.log("Server is running on port :: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(" MONGO DB CONNECTION FAILED :: ERROR ", error);
    return;
  });
