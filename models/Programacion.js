const mongoose = require("mongoose");

const ProgramacionSchema = new mongoose.Schema({
  dia: Number,
  actividad: String, 
  inicio: Date,
  fin: Date

  }, { timestamps: true }
);

const Programacion = mongoose.model("Programacion", ProgramacionSchema);

module.exports = Programacion;