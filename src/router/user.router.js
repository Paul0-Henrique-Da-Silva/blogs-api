const router = require('express').Router()
const creteController = require('../controllers/create.controller');

router.post('/', creteController.creater)

module.exports = router
