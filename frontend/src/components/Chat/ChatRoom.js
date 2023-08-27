import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';

const ChatRoom = ({ chatRoomId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Load messages from API or context on component mount

  const handleSendMessage = () => {
    // Send message to backend API
    // Clear the input field
    setNewMessage('');
  };

  return (
    <div className="chat-room">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
