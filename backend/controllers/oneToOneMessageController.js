const OneToOneMessage = require('../models/OneToOneMessage');

const createOneToOneMessage = async (req, res) => {
  try {
    const newMessage = new OneToOneMessage(req.body);
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOneToOneMessages = async (req, res) => {
  try {
    const senderId = req.query.sender;
    const receiverId = req.query.receiver;
    const messages = await OneToOneMessage.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add more controller functions as needed

module.exports = {
  createOneToOneMessage,
  getOneToOneMessages,
  // Add exported functions here
};
