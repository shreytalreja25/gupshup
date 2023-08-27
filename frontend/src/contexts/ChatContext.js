import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const [oneToOneChatData, setOneToOneChatData] = useState({});

  const selectChatRoom = (chatRoomId) => {
    // Set the selected chat room and load messages
    setSelectedChatRoom(chatRoomId);
  };

  const sendOneToOneMessage = (recipient, message) => {
    // Send one-to-one message to recipient
    // Update oneToOneChatData with the new message
  };

  return (
    <ChatContext.Provider
      value={{
        chatRooms,
        selectedChatRoom,
        oneToOneChatData,
        selectChatRoom,
        sendOneToOneMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
