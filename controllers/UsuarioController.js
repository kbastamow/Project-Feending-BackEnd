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
};
module.exports = UsuarioController;
