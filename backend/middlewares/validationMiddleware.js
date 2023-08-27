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
  
  module.exports = {
    validateRequestData,
  };
  