import api from './api';

export const getChatRooms = () => {
  return api.get('/chatrooms');
};

export const getChatRoomById = (chatRoomId) => {
  return api.get(`/chatrooms/${chatRoomId}`);
};

export const getOneToOneChats = () => {
  return api.get('/chats/one-to-one');
};

export const getOneToOneChatById = (recipientId) => {
  return api.get(`/chats/one-to-one/${recipientId}`);
};

// Add more chat-related API requests as needed
