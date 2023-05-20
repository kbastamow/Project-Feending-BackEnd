const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
    nombre: String,                             
    imagen: String,
   
  }, { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;