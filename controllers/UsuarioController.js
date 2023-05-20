const Usuario = require("../models/Usuario");
const bcrypt = require ('bcryptjs');
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys.js");

const UsuarioController = {
    
  async create(req, res) {
    req.body.role = "usuario";
    const password = req.body.password;
    let hashedPassword;
    if (password) {
      hashedPassword = bcrypt.hashSync(password, 10); ///encriptando clave de acceso
    }
    try {
      const usuario = await Usuario.create({ ...req.body, password: hashedPassword });
      res.status(201).send({ message: "Usuario creado con éxito", usuario });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el usuario" });
    }
  },

  async login(req, res) {
    try {
      const usuario = await Usuario.findOne({
        email: req.body.email,
      });
      if (!usuario) {
        return res.status(400).send({ msg: "Correo o contraseña incorrectos" });
      }
      const isMatch = await bcrypt.compare(req.body.password, usuario.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Correo o contraseña incorrectos" });
      }
      const token = jwt.sign({ _id: usuario._id }, jwt_secret);
      if (usuario.tokens.length > 4) usuario.tokens.shift;
      usuario.tokens.push(token);
      await usuario.save();
      res.send({ msg: "Bienvenid@ " + usuario.nombre, token});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Ha habido un error al logearte", error });
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
  },
};
module.exports = UsuarioController;
