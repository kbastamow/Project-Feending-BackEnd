const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
    dia: Number,
    actividad: String, 
    inicio: Date,
    fin: Date
  
  }, { timestamps: true }
);

const Sponsor = mongoose.model("Evento", EventoSchema);

module.exports = Evento;