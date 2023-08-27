import React from 'react';

const ChatRoomList = ({ chatRooms, onSelectRoom }) => {
  return (
    <div className="chat-room-list">
      <h3>Chat Rooms</h3>
      <ul>
        {chatRooms.map((chatRoom) => (
          <li key={chatRoom.id} onClick={() => onSelectRoom(chatRoom.id)}>
            {chatRoom.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomList;
