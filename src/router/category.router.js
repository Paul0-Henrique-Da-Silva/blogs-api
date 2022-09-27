const router = require('express').Router();
const categoryController = require('../controllers/category.controllers');
const auth = require('../middlewares/jwt');

router.get('/', auth.checkToken, categoryController.getCategory);

module.exports = router;
