const mongoose = require("mongoose");

const ProgramacionSchema = new mongoose.Schema({
    dia: Number ,
    finicio: Date,
    ffin: Date,
    hinicio: Date,
    hfin: Date,
    direccion: {
        calle: String,
        localidad: String,
        provincia: String
    },
    econfirm: Boolean

  }, { timestamps: true }
);

const Sponsor = mongoose.model("Programacion", ProgramacionSchema);

module.exports = Programacion;