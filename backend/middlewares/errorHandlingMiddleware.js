const errorLogger = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  };
  
  const errorHandler = (err, req, res, next) => {
    res.status(500).json({ message: 'Internal server error' });
  };
  
  module.exports = {
    errorLogger,
    errorHandler,
  };
  