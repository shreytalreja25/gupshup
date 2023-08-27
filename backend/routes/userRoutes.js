const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/create', validationMiddleware.validateRequestData, userController.createUser);
router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);
// Add more routes as needed

module.exports = router;
