const loginController = require('../controllers/login.controllers')
const router = require('express').Router();

router.post('/', loginController.login);

module.exports = router;
