const router = require('express').Router();
const auth = require('../middlewares/jwt');
const postControllers = require('../controllers/post.controllers');

router.get('/', auth.checkToken, postControllers.getPost);

module.exports = router;