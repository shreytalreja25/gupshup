import React from 'react';

const ChatMessage = ({ message, isOwnMessage }) => {
  return (
    <div className={`chat-message ${isOwnMessage ? 'own' : 'other'}`}>
      <div className="message-text">{message.text}</div>
      <div className="message-time">{message.timestamp}</div>
    </div>
  );
};

export default ChatMessage;
