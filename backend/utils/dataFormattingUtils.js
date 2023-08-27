// utils/dataFormattingUtils.js

const formatUserResponse = (user) => {
    return {
      id: user._id,
      username: user.username,
      email: user.email,
      // Add more fields as needed
    };
  };
  
  module.exports = {
    formatUserResponse,
  };
  