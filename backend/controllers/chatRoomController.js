const ChatRoom = require('../models/ChatRoom');

const createChatRoom = async (req, res) => {
  try {
    const newChatRoom = new ChatRoom(req.body);
    await newChatRoom.save();
    res.status(201).json(newChatRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getChatRoomById = async (req, res) => {
  try {
    const chatRoom = await ChatRoom.findById(req.params.id);
    res.status(200).json(chatRoom);
  } catch (error) {
    res.status(404).json({ message: 'Chat room not found' });
  }
};

// Add more controller functions as needed

module.exports = {
  createChatRoom,
  getChatRoomById,
  // Add exported functions here
};
