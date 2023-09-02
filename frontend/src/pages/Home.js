import React from 'react';
import Animate from 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h2>Welcome to GupShup</h2>
      <p>Start chatting with friends and groups!</p>
      <div className="container">
        <div className="row feature-cards">
          <div className="col-md-4 feature-card">
            <h3>Authentication</h3>
            <p>Secure user registration and login using email/password</p>
            <i className="fas fa-user-circle animated"></i>
          </div>
          <div className="col-md-4 feature-card">
            <h3>Social Login</h3>
            <p>Option to sign in with Google or Facebook accounts</p>
            <i className="fab fa-google animated"></i>
            <i className="fab fa-facebook-f animated"></i>
          </div>
          <div className="col-md-4 feature-card">
            <h3>Chat Rooms</h3>
            <p>Create and join public or private chat rooms</p>
            <i className="fas fa-comments animated"></i>
          </div>
        </div>
        <div className="row feature-cards">
          <div className="col-md-4 feature-card">
            <h3>One-to-One Chat</h3>
            <p>Real-time private messaging between users</p>
            <i className="fas fa-envelope animated"></i>
          </div>
          <div className="col-md-4 feature-card">
            <h3>User Profiles</h3>
            <p>Customize user profiles with avatars and status</p>
            <i className="fas fa-user-circle animated"></i>
          </div>
          <div className="col-md-4 feature-card">
            <h3>Group Management</h3>
            <p>Admins can create, manage, and moderate chat groups</p>
            <i className="fas fa-users animated"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;