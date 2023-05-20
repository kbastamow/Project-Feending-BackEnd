const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    role: String,
    puesto: String,
    imagen: String,
    comentarios: Array

  }, { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
