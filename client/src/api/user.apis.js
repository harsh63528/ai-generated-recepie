import instance from "./axios.instance.js";

export const registerUser = async (userData) => {
  try {
    const response = await instance.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to register user');
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await instance.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to login user');
  }
};

export const logoutUser = async () => {
  try {
    const response = await instance.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to logout user');
  }
};

export const getUserProfile = async () => {
  try {
    const response = await instance.post("/auth/profile");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
  }
};

