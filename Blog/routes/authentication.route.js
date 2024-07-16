const authenticationRouter = require("express").Router();
const {
  handleUserSignIn,
  handleUserSignUp,
} = require("../controllers/authentication.controller.js");

authenticationRouter
  .get("/signup", (request, respone) => {
    respone.render("../views/signup.ejs");
  })
  .post("/signup", handleUserSignUp);

authenticationRouter
  .get("/signin", (request, respone) => {
    respone.render("../views/signin.ejs");
  })
  .post("/signin", handleUserSignIn);

module.exports = {
  authenticationRouter,
};
