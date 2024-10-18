import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/DashboardPage.css'; // Ensure your styles are imported
import { allPets, deletePet } from '../../api/DashboardApi';

const DashboardPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await allPets();
        setPets(data.animals);
      } catch (error) {
        setError('Error fetching pets. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handleDeletePet = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this pet?');
    if (confirmDelete) {
      try {
        await deletePet(id);
        setPets((prevPets) => prevPets.filter((pet) => pet._id !== id));
      } catch (error) {
        setError('Error deleting pet. Please try again.');
      }
    }
  };

  const handleEditPet = (pet) => {
    navigate(`/create-pet/${pet._id}`);
  };

  if (loading) {
    return <div className="loading">Loading pets...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Admin Pet Dashboard</h1>
        <button onClick={() => navigate('/create-pet')} className="create-pet-btn">
          Add New Pet
        </button>
      </header>

      <section className="pet-section">
        <h2>Pet List</h2>
        {pets.length === 0 ? (
          <p>No pets available. Please add a pet.</p>
        ) : (
          <ul className="pet-list">
            {pets.map((pet) => (
              <li key={pet._id} className="pet-list-item">
                <div className="pet-info">
                  <strong>Name:</strong> {pet.name}, <strong>Type:</strong> {pet.breed}
                </div>
                <div className="pet-actions">
                  <button onClick={() => handleEditPet(pet)} className="edit-btn">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePet(pet._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default DashboardPage;
