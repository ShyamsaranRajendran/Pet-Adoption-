import axios from "axios";

// Use a default API URL if the environment variable is not set
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error(
    "API URL is not defined. Please set REACT_APP_API_URL in your environment variables."
  );
}

// Fetch all pets
export const allPets = async () => {
  try {
    const response = await axios.get(`${API_URL}/pet/all`); // Use GET for fetching all pets
    return response.data; // Return the data directly
  } catch (error) {
    handleError(error);
  }
};

// Add a new pet
export const addPet = async (petData) => {
  try {
    const response = await axios.post(`${API_URL}/pet/add`, petData); // Change endpoint to add
    return response.data; // Return the added pet data
  } catch (error) {
    handleError(error);
  }
};

// Update an existing pet
export const updatePet = async (id, petData) => {
  try {
    const response = await axios.put(`${API_URL}/pet/${id}`, petData);
    return response.data; // Return the updated pet data
  } catch (error) {
    handleError(error);
  }
};

// Edit an existing pet
export const editPet = async (petId, updates) => {
  try {
    const response = await axios.put(`${API_URL}/pet/edit/${petId}`, updates); // Use PUT for editing
    return response.data; // Return the updated pet data
  } catch (error) {
    handleError(error);
  }
};

// Delete a pet
export const deletePet = async (petId) => {
  try {
    const response = await axios.delete(`${API_URL}/pet/delete/${petId}`); // Use DELETE for removing a pet
    return response.data; // Return a confirmation message
  } catch (error) {
    handleError(error);
  }
};

// Get pet by ID
export const getPetById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pet/${id}`);
    return response.data; // Return the pet data
  } catch (error) {
    handleError(error);
  }
};

// User login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials); // Assuming there's a user login endpoint
    return response.data; // Return user login response
  } catch (error) {
    handleError(error);
  }
};

// Handle errors consistently
const handleError = (error) => {
  if (error.response && error.response.data) {
    throw new Error(error.response.data.message);
  }
  throw new Error("An unexpected error occurred");
};
