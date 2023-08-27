import React from 'react';
import ChatRoomList from '../components/Chat/ChatRoomList';

const ChatRooms = () => {
  // Extract chat rooms from context or API
  const chatRooms = [
    { id: 'chat-room-1', name: 'Chat Room 1' },
    { id: 'chat-room-2', name: 'Chat Room 2' },
    // ... add more chat rooms
  ];

  return (
    <div className="chat-rooms-page">
      <h2>Chat Rooms</h2>
      <ChatRoomList chatRooms={chatRooms} onSelectRoom={(roomId) => console.log(roomId)} />
    </div>
  );
};

export default ChatRooms;
