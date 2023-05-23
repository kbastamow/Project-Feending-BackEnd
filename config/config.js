const mongoose = require("mongoose");

// const { MONGO_URI } = require("./keys"); // Esto ya no es necesario traerlo
require("dotenv").config(); 


const dbConnection = async () => {
  try {
    // await mongoose.connect(MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Base de datos conectada con éxito");
  } catch (error) {
    console.error(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

module.exports = { 
    dbConnection, 
};
