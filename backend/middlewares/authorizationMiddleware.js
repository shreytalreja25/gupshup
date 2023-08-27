const checkUserRole = (requiredRole) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Assuming you store user role in the token
  
      if (userRole !== requiredRole) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
  
      next();
    };
  };
  
  module.exports = {
    checkUserRole,
  };
  