import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (user) => {
  const response = await axios.post(`${API_URL}/register`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user);
  return response.data;
};
