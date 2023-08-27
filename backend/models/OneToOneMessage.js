const mongoose = require('mongoose');

const oneToOneMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const OneToOneMessage = mongoose.model('OneToOneMessage', oneToOneMessageSchema);

module.exports = OneToOneMessage;
