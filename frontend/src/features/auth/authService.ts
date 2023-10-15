import axios from 'axios';
import { User, LoginUserData } from './authSlice';

const API_URL = '/api/users/';

// Register user
const register = async (userData: User) => {
  try {
    const response = await axios.post(API_URL, userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login user
const login = async (userData: LoginUserData) => {
  try {
    const response = await axios.post(API_URL + 'login', userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
