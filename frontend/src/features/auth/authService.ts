import axios from 'axios';

const API_URL = '/api/users/';

type UserDataType = string | null;

// Register user
const register = async (userData: UserDataType) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
