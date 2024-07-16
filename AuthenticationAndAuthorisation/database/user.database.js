const mongoose = require("mongoose") ;


const connectToDatabase = async () =>{
  
   try {
      const connectionInstance = await mongoose.connect(process.env.DATABASEURI);

      return connectionInstance ;
   } catch (error) {
     console.log("DATABASE CONNECTION ERROR :: ERROR",error);
   }
  


} ;



module.exports = connectToDatabase ;