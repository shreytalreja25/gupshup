const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set up middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up your routes here
const userRoutes = require('./routes/userRoutes');
const chatRoomRoutes = require('./routes/chatRoomRoutes');
const oneToOneMessageRoutes = require('./routes/oneToOneMessageRoutes');

app.use('/api/users', userRoutes);
app.use('/api/chatrooms', chatRoomRoutes);
app.use('/api/messages', oneToOneMessageRoutes);

// Socket.io communication
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle socket events here
  // For example:
  // socket.on('message', (data) => {
  //   io.emit('newMessage', data);
  // });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Error handling middleware
const { errorLogger, errorHandler } = require('./middlewares/errorHandlingMiddleware');
app.use(errorLogger);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
