const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/create', validationMiddleware.validateRequestData, userController.createUser);
router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);
// router.post('/login', validationMiddleware.v, userController.loginUser);
router.post('/login', userController.loginUser);

module.exports = router;
