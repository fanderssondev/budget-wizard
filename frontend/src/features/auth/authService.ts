import axios from 'axios';
import { User } from './authSlice';

const API_URL = '/api/users/';

// Register user
const register = async (userData: User) => {
  const response = await axios.post(API_URL, userData);
  console.log(response);

  // try {
  //   const response = await axios.post(API_URL, userData);
  //   if (response.data) {
  //     localStorage.setItem('user', JSON.stringify(response.data));
  //   }

  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
};

const authService = {
  register,
};

export default authService;
