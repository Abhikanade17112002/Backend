const express = require("express") ;
const cookieParser = require('cookie-parser')
const cors = require("cors")
const App = express() ;



// MIDDLEWARES
App.use(cors()) ;
App.use(express.json()) ;
App.use(cookieParser()) ;
App.use(express.urlencoded({extended:true})) ;
App.use(express.static("public")) ;



//  ROUTES 
App.get("/" ,(request,response)=>{
    response.send("<h1>Hello Node Express <h1/>").status(200) ;
})




module.exports = App ;