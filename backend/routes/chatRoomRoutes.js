const express = require('express');
const chatRoomController = require('../controllers/chatRoomController');
const { createChatRoom } = chatRoomController;
const authMiddleware = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/create', validationMiddleware.validateRequestData, async (req, res) => {
  const chatRoom = await createChatRoom(req.body);
  res.status(201).json(chatRoom);
});

router.get('/:id', authMiddleware.authenticateUser, chatRoomController.getChatRoomById);
// Add more routes as needed

module.exports = router;