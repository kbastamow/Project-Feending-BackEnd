const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    role: String,
    puesto: String,
    imagen: String, //multer

  }, { timestamps: true }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
