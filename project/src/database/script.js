const mongoose = require("mongoose")
require("dotenv").config() ;


const connectDataBase = async () =>{
    try {
        const dataBaseConnectionInstance = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`MongoDB connected : ${dataBaseConnectionInstance.connection.host}`);
    } catch (error) {
        console.log(" DATABASE CONNECTION FAILED :: ",error );
    }
}

module.exports = connectDataBase ;