const express = require('express');
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController');

router.post('/create',UsuarioController.create)
router.get('/getAllUsers',UsuarioController.getAll)
router.get('/getById/:_id',UsuarioController.getById)

module.exports = router;