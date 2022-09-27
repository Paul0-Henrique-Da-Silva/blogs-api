const router = require('express').Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/jwt');

router.post('/', userController.creater);
router.get('/', auth.checkToken, userController.getUsers);
router.get('/:id', auth.checkToken, userController.getUsersById);

module.exports = router;
