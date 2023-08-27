import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const OneToOneChat = ({ recipient, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Send message to backend API
    onSendMessage(newMessage);
    // Clear the input field
    setNewMessage('');
  };

  return (
    <div className="one-to-one-chat">
      <h3>Chat with {recipient}</h3>
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

export default OneToOneChat;
