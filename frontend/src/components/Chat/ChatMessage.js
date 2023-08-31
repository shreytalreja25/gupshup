import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <p>{message.sender}: {message.text}</p>
      <h2>HELLO WORLD</h2>
    </div>
  );
};

export default ChatMessage;
