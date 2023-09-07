import React from 'react';
import './styles/Profile.css'; // Import your CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Shrey</h1>
        <div className="profile-stats">
          <div className="followers">
            <span className="count">500</span>
            <span className="label">Followers</span>
          </div>
          <div className="following">
            <span className="count">200</span>
            <span className="label">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
