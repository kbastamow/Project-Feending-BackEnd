const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys.js");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const usuario = await Usuario.findOne({ _id: payload._id, tokens: token });
    if (!usuario) {
      return res.status(401).send({ message: "No estas autorizado" });
    }
    req.usuario = usuario;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ error, message: "Necesitas estar autenticado" });
  }
};

module.exports = { authentication };
