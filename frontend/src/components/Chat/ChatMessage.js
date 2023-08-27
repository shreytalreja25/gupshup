import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <p>{message.sender}: {message.text}</p>
    </div>
  );
};

export default ChatMessage;
