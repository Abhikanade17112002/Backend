require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectToMongoDB = require("../database/blog.database.js");
const { authenticationRouter } = require("../routes/authentication.route");
const { userRouter } = require("../routes/user.route");
const handleIsUserLoggedIn = require("../middlewares/userAuthentication.middleware.js");

// App
const App = express();

// Middlewares

App.set("view engine", "ejs");

App.use(express.static("public"));
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(cookieParser());

App.get("/", (request, response) => {
  response.render("index.ejs");
});
App.use(authenticationRouter);
App.use("/user", handleIsUserLoggedIn, userRouter);

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
