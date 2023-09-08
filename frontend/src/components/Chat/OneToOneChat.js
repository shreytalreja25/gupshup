import React from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const OneToOneChat = () => {
  // Placeholder data for the chat messages
  const chatMessages = [
    { sender: 'User1', message: 'Hello!' },
    { sender: 'User2', message: 'Hi there!' },
    // Add more chat messages as needed
  ];

  return (
    <div className="one-to-one-chat">
      <div className="chat-header">
        <h2>Chat with UserXYZ</h2> {/* Replace with the actual username */}
      </div>
      <div className="chat-messages">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default OneToOneChat;


// import React, { useState, useEffect } from 'react';
// import ChatMessage from './ChatMessage';
// import ChatInput from './ChatInput';
// import axios from 'axios';

// const OneToOneChat = ({ user, chatUser }) => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch chat messages between the user and chatUser
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(`/api/messages/one-to-one/${chatUser._id}`);
//         setMessages(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching chat messages.');
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, [chatUser._id]);

//   return (
//     <div className="one-to-one-chat">
//       <div className="chat-header">
//         <h2>{chatUser.username}</h2>
//       </div>

//       <div className="chat-messages">
//         {loading ? (
//           <p>Loading messages...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : messages.length === 0 ? (
//           <p>No messages yet. Start the conversation!</p>
//         ) : (
//           messages.map((message) => (
//             <ChatMessage
//               key={message._id}
//               message={message}
//               isSentByCurrentUser={message.sender._id === user._id}
//             />
//           ))
//         )}
//       </div>

//       <ChatInput chatUser={chatUser} />
//     </div>
//   );
// };

// export default OneToOneChat;
