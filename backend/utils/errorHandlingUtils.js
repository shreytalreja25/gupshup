// utils/errorHandlingUtils.js

const createErrorResponse = (statusCode, message) => {
    return { status: statusCode, message: message };
  };
  
  module.exports = {
    createErrorResponse,
  };
  