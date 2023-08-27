const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;
