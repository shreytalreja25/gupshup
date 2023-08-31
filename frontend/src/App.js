import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';
import LoadingSpinner from './components/Common/LoadingSpinner';
import HomePage from './pages/Home';
import ChatRoomsPage from './pages/ChatRooms';
import ChatRoomPage from './pages/ChatRoomPage';
import OneToOneChatsPage from './pages/OneToOneChats';
import ProfilePage from './pages/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ChatProvider>
          <div className="app">
            <Header />
            <div className="main-container">
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/chatrooms" element={<ChatRoomsPage />} />
                  <Route path="/chatrooms/:id" element={<ChatRoomPage />} />
                  <Route path="/onetoonechats" element={<OneToOneChatsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </div>
            </div>
            <LoadingSpinner />
          </div>
        </ChatProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
