const Usuario = require("../models/Usuario");

const UsuarioController = {
  async create(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      res.status(201).send({ message: "Usuario creado con exito", usuario });
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
      res.send({ message: "Usuario mostrados con exito", usuarios });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const usuario = await Usuario.findById(req.params._id);
      res.send({ message: 'Usuario por ID mostrado con exito', usuario});
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params._id)
      res.send({ usuario, message: 'Eliminado' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al eliminar el usuario'})
    }
  }

};
module.exports = UsuarioController;
