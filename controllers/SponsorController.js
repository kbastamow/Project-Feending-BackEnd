const Sponsor = require("../models/Sponsor");

const SponsorController = {
    
  async create(req, res) {
    try {
      const sponsor = await Sponsor.create(req.body);
      res.status(201).send({ message: "Sponsor creado con exito", sponsor });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el sponsor" });
    }
  },

  async getAll(req, res) {
    try {
      const sponsors = await Sponsor.find();
      res.send({ message: "Sponsors mostrados con exito", sponsors });
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const sponsor = await Sponsor.findById(req.params._id);
      res.send({ message: 'Sponsor por ID mostrado con exito', sponsor});
    } catch (error) {
      console.error(error);
    }
  },

  async delete(req, res) {
    try {
      const sponsor = await Sponsor.findByIdAndDelete(req.params._id)
      res.send({ sponsor, message: 'Eliminado' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Ha habido un problema al eliminar el sponsor'})
    }
  }

};
module.exports = SponsorController;