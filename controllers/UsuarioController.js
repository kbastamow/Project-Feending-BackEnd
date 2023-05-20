const Usuario = require("../models/Usuario");

const UsuarioController = {
  async create(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      res.status(201).send({ message: "Usuario creado con éxito", usuario });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el usuario" });
    }
  },

  async getAll(req, res) {
    try {
      const usuarios = await Usuario.find();
      res.send({ message: "Usuarios mostrados con éxito", usuarios });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const usuario = await Usuario.findById(req.params._id);
      res.send({ message: "Usuario por ID mostrado con éxito", usuario });
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params._id);
      res.send({ usuario, message: "Eliminado" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al eliminar el usuario" });
    }
  },

  async update(req, res) {
    try {
      const usuario = await Usuario.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Usuario actualizado con éxito", usuario });
    } catch (error) {
      console.error(error);
    }
  }

};
module.exports = UsuarioController;
