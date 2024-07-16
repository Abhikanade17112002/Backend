/*
Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.



Middleware in Express.js is a function that sits between the incoming request and 
the outgoing response. It can manipulate the request object, the response object, 
or stop the request-response cycle entirely. 
Think of it as a series of functions that process requests one step at a time.

types

1) application level middle ware 
2) router level middle ware 
3) route level middle ware 
*/

const express = require("express");
const path = require("path");
const app = express();

const mainRouter = require("./routes/mainroutes");
const PORT = process.env.PORT || 3000;


//  app.use(express.json())    for accepting request.body.password  built in middle ware 
//  app.use(express.urlencoded())    for accepting request.body.password  from form 
//  app.use(morgan())    built in middle ware logger u need to npm i morga n 
// /api/products/:id      can be assced from request.params 
app.set("view engine", "ejs");
console.log(app.get("views"));
app.use(mainRouter);

app.listen(PORT, () => {
  console.log(` Started Server , Listining On PORT ${PORT}`);
});
