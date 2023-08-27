import React from 'react';
import OneToOneChat from '../components/Chat/OneToOneChat';

const OneToOneChats = () => {
  // Extract one-to-one chat data from context or API
  const oneToOneChatData = {
    recipient: 'John Doe',
    messages: [
      { sender: 'You', text: 'Hello John!' },
      { sender: 'John Doe', text: 'Hi there!' },
      // ... add more messages
    ],
  };

  return (
    <div className="one-to-one-chats-page">
      <h2>One-to-One Chats</h2>
      <OneToOneChat
        recipient={oneToOneChatData.recipient}
        messages={oneToOneChatData.messages}
        onSendMessage={(message) => console.log(message)}
      />
    </div>
  );
};

export default OneToOneChats;
