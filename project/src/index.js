require("dotenv").config() ;

const connectDataBase = require("./database/script.js")
const App = require("./app.js");

connectDataBase().then(()=>{
    App.listen( 6000 , () =>{
        console.log(`Server is running on port ${process.env.PORT || 6000 }`) ;
    })
})
.catch((error)=>{
    console.log(" DATABASE CONNECTION FAILED :: ",error );
}) ;





