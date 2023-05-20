const express = require('express');
const router = express.Router()
const SponsorController = require('../controllers/SponsorController');

router.post('/create',SponsorController.create)
router.get('/getAllUsers',UsuarioController.getAll)
router.get('/getById/:_id',UsuarioController.getById)
router.delete('/delete/:_id',UsuarioController.delete)



module.exports = router;