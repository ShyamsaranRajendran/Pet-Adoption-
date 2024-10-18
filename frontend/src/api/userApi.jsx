import axios from "axios";

// Use a default API URL if the environment variable is not set
const API_URL = process.env.REACT_APP_API_URL ;

// userApi.js
export const registerUser = async (userData) => {
  const response = await fetch('http://localhost:5000/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Registration failed');
  }

  return await response.json();
};


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    // Handle error response and throw a user-friendly message
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Login failed");
    }
    throw new Error("An unexpected error occurred");
  }
};
