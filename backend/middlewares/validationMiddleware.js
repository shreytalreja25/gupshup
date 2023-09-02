const validateEmail = (email) => {
    // Add email validation logic
    return true;
  };
  
  const validateRequestData = (req, res, next) => {
    const { email } = req.body;
  
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    next();
  };
  
  const validateUsername = (username) => {
    // Add username validation logic
    // For example, you can check if the username meets certain criteria,
    // such as having a minimum length, not containing special characters, etc.
    // Return true if the username is valid, otherwise return false.
    // Here's an example:
    
    const usernameRegex = /^[a-zA-Z0-9_]+$/; // Allow letters, numbers, and underscores
    const minLength = 4; // Minimum username length
    
    if (!username.match(usernameRegex) || username.length < minLength) {
      return false;
    }
    
    return true;
  };


  const validateLoginData = (req, res, next) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    next();
  };
  
  module.exports = {
    validateRequestData,
  };
  