const express = require('express');
const oneToOneMessageController = require('../controllers/oneToOneMessageController');
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/create', validationMiddleware.validateRequestData, oneToOneMessageController.createOneToOneMessage);
router.get('/', authMiddleware.authenticateUser, oneToOneMessageController.getOneToOneMessages);
// Add more routes as needed

module.exports = router;
