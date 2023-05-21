const mongoose = require("mongoose");

const ProgramacionSchema = new mongoose.Schema({
    dia: Number ,
    inicio: Date,
    fin: Date,
    actividad: String
   
  }, { timestamps: true }
);

const Sponsor = mongoose.model("Programacion", ProgramacionSchema);

module.exports = Sponsor;