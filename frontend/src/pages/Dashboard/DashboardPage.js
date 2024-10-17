// src/pages/Dashboard/DashboardPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import petDataJson from '../../data.json'; // Adjust the path if needed
import './css/DashboardPage.css'; // Optional CSS for styling

const DashboardPage = () => {
  const [pets, setPets] = useState(petDataJson); // Load pets from JSON
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle pet deletion
  const handleDeletePet = (id) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  // Function to navigate to edit pet page
  const handleEditPet = (pet) => {
    navigate(`/create-pet/${pet.id}`); // Navigate to the edit pet page with the pet ID
  };

  return (
    <div className="dashboard-page">
      <h1>Pet Dashboard</h1>
      <button onClick={() => navigate('/create-pet')} className="create-pet-btn">
        Add New Pet
      </button>

      {/* List of pets */}
      <h2>Pet List</h2>
      <ul className="pet-list">
        {pets.map((pet) => (
          <li key={pet.id} className="pet-list-item">
            <div>
              <strong>Name:</strong> {pet.name}, <strong>Type:</strong> {pet.type}
            </div>
            <div>
              <button onClick={() => handleEditPet(pet)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDeletePet(pet.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
