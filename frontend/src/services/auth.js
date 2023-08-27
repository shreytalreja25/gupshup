import api from './api';

export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const register = (username, email, password) => {
  return api.post('/auth/register', { username, email, password });
};

// Add more auth-related API requests as needed
