const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user to the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if the user with the given username exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Check if the provided password matches the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const secretKey = process.env.JWT_SECRET;
    // If username and password are valid, generate a JWT for authentication
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' }); // Use the secretKey from process.env

    // Return the token to the client
    res.status(200).json({ token , message:"Login Successful"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more controller functions as needed

module.exports = {
  createUser,
  getUserById,
  loginUser
  // Add exported functions here
};
