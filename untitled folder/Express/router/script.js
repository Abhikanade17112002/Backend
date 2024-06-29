



const express = require("express") 
const path = require("path")
const app = express() ;

const mainRouter = require("./routes/mainroutes");
const PORT = process.env.PORT || 3000 ;



app.set("view engine","ejs")
console.log(app.get("views"));
app.use(mainRouter)


app.listen( PORT , ()=>{
      console.log(` Started Server , Listining On PORT ${PORT}`);
})