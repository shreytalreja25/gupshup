import React from 'react';

const ChatList = () => {
  // Placeholder data for recent chats
  const recentChats = [
    { id: 1, username: 'user1', lastMessage: 'Hello!', timestamp: '2 hours ago' },
    { id: 2, username: 'user2', lastMessage: 'Hi there!', timestamp: '3 hours ago' },
    { id: 3, username: 'user3', lastMessage: 'Hey!', timestamp: '4 hours ago' },
  ];

  return (
    <div className="chat-list">
      <h2>Recent Chats</h2>
      <ul>
        {recentChats.map((chat) => (
          <li key={chat.id}>
            <div className="chat-preview">
              <div className="user-avatar">
                {/* User avatar image */}
              </div>
              <div className="chat-details">
                <div className="user-info">
                  <h3>{chat.username}</h3>
                  <span className="timestamp">{chat.timestamp}</span>
                </div>
                <p>{chat.lastMessage}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
