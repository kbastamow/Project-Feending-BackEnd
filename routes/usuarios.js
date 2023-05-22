const express = require('express');
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController');
const { authentication } = require("../middlewares/authentication");

router.post('/create',UsuarioController.create)
router.get('/getAllUsers',UsuarioController.getAll)
router.get('/getById/:_id',UsuarioController.getById)
router.delete('/delete/:_id',authentication,UsuarioController.delete)
router.put('/update/:_id',authentication,UsuarioController.update)
router.post('/login',UsuarioController.login)
router.delete('/logout',authentication,UsuarioController.logout)

module.exports = router;