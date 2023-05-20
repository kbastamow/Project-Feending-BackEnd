const express = require('express');
const router = express.Router()
const RecintoController = require('../controllers/RecintoController');

router.post('/create',RecintoController.create)
router.get('/getAllRecintos',RecintoController.getAll)
router.get('/getById/:_id',RecintoController.getById)
router.delete('/delete/:_id',RecintoController.delete)
router.put('/update/:_id',RecintoController.update)


module.exports = router;