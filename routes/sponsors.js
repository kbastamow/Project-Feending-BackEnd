const express = require('express');
const router = express.Router()
const SponsorController = require('../controllers/SponsorController');

router.post('/create',SponsorController.create)
router.get('/getAllSponsors',SponsorController.getAll)
router.get('/getById/:_id',SponsorController.getById)
router.delete('/delete/:_id',SponsorController.delete)
router.put('/update/:_id',SponsorController.update)


module.exports = router;