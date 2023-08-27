import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_SOCKET_URL);

export const connectToSocket = () => {
  socket.connect();
};

export const disconnectFromSocket = () => {
  socket.disconnect();
};

export const subscribeToChatRoom = (chatRoomId, callback) => {
  socket.emit('subscribeToChatRoom', chatRoomId);
  socket.on('newMessage', callback);
};

export const subscribeToOneToOneChat = (recipientId, callback) => {
  socket.emit('subscribeToOneToOneChat', recipientId);
  socket.on('newOneToOneMessage', callback);
};

export const sendMessage = (chatRoomId, message) => {
  socket.emit('sendMessage', { chatRoomId, message });
};

export const sendOneToOneMessage = (recipientId, message) => {
  socket.emit('sendOneToOneMessage', { recipientId, message });
};

// Add more socket-related functions as needed
