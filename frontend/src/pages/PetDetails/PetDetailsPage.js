import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/PetDetailsPage.css'; // Import CSS for styling
import ApplicationPage from '../Application/ApplicationPage';

function PetDetailsPage() {
  const { id } = useParams(); // Get the pet ID from the URL
  const [pet, setPet] = useState(null); // State to hold pet details
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const [showApplication, setShowApplication] = useState(false); // State to control application form visibility

  // Fetch pet details from the API
  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/pet/find/${id}`); // Fetching using the pet ID
        if (!response.ok) {
          throw new Error('Failed to fetch pet details');
        }
        const data = await response.json();
        setPet(data.animals); // Update state with fetched pet details
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPetDetails(); // Call the fetch function
  }, [id]); // Run the effect when the pet ID changes

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const handleAdoptButtonClick = () => {
    setShowApplication(true); // Show the application form when button is clicked
  };

  // Render pet details or application form based on state
  return (
    <div className="pet-details-page">
      {showApplication ? (
        <ApplicationPage /> // Render the ApplicationPage when showApplication is true
      ) : (
        <>
          <h1 className="pet-name">{pet.name}</h1>
          <img className="pet-image" src={pet.image} alt={pet.name} />
          <div className="pet-info">
            <p><strong>Type:</strong> {pet.type}</p>
            <p><strong>Age:</strong> {pet.age} years</p>
            <p><strong>Description:</strong> {pet.description}</p>
            <p><strong>Color:</strong> {pet.color}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Neutered:</strong> {pet.neutered ? 'Yes' : 'No'}</p>
          </div>
          
          <div className="adoption-info">
            <h2>Why Adopt {pet.name}?</h2>
            <p>Adopting a pet is a life-changing experience. Here are a few reasons why you should consider adopting {pet.name}:</p>
            <ul>
              <li>Loyal Companionship: Pets provide unconditional love and companionship.</li>
              <li>Give Them a Second Chance: Many animals in shelters are waiting for a loving home.</li>
              <li>Health Benefits: Owning a pet can reduce stress, anxiety, and depression.</li>
              <li>Save a Life: You can make a real difference by giving {pet.name} a forever home.</li>
            </ul>
            <button className="adopt-button" onClick={handleAdoptButtonClick}>
              Adopt {pet.name}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PetDetailsPage;
