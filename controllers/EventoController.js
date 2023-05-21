const Evento = require("../models Evento");

const EventoController = {
    
  async create(req, res) {
    try {
      const evento = await Evento.create(req.body);
      res.status(201).send({ message:  "Evento creado con exito", evento });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el evento" });
    }
  },

  async getAll(req, res) {
    try {
      const eventos = await Evento.find();
      res.send({ message: "Eventos mostrados con exito", eventos });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const evento = await Evento.findById(req.params._id);
      res.send({ message: 'Evento por ID mostrado con exito', evento});
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const evento = await Evento.findByIdAndDelete(req.params._id)
      res.send({ evento, message: 'Eliminado' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al eliminar el evento'})
    }
  },

  async update(req, res) {
    try {
      const evento = await Evento.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Evento actualizado con éxito", evento });
    } catch (error) {
      console.error(error);
    }
  }

};

module.exports = EventoController;