const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
    nombre: String,                             
    descripcion: String, 
    
   
  }, { timestamps: true }
);

const Sponsor = mongoose.model("Evento", EventoSchema);

module.exports = Evento;