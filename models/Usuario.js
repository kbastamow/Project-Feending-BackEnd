const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    role: {type: String, default:"usuario"},
    puesto: String,
    empresa: String,
    imagen: String, //multer
    tokens: [],

  }, { timestamps: true }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
