import React from 'react';

const Profile = () => {
  // Extract user data from context or API
  const userData = {
    username: 'john_doe',
    email: 'john@example.com',
    // ... add more user data
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      {/* ... additional profile information */}
    </div>
  );
};

export default Profile;
