require("dotenv").config();
const userRouter = require("../routes/user.routes.js");
const express = require("express");

const connectToMongoDB = require("../database/user.database.js");
const cookieParser = require("cookie-parser") ;

// App
const App = express();


// View Engine

App.set("view engine","ejs") ;
App.set("views","./views");
App.use(express.static("public"));

//  Middlewares
App.use(express.json());
App.use(express.urlencoded({extended:true}));
App.use(express.static("public"));
App.use(cookieParser()) ;



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
