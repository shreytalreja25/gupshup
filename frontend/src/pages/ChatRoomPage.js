import React from 'react';
import ChatRoom from '../components/Chat/ChatRoom';

const ChatRoomPage = () => {
  // Extract chat room ID from route params or context
  const chatRoomId = 'chat-room-id'; // Replace with actual chat room ID

  return (
    <div className="chat-room-page">
      <h2>Chat Room</h2>
      <ChatRoom chatRoomId={chatRoomId} />
    </div>
  );
};

export default ChatRoomPage;
