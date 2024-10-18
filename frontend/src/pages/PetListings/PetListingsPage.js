import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './css/PetListingsPage.css'; 

// Import images
import image1 from './css/image1.jpeg';
import image2 from './css/image2.jpeg';
import image3 from './css/image3.jpeg';
import image4 from './css/image4.jpeg';
import image5 from './css/image5.jpeg';
import image6 from './css/image6.jpeg';
import image7 from './css/image7.jpeg';
import image9 from './css/image9.jpeg';
import image10 from './css/image10.jpeg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image9,
  image10
];

function PetListingsPage() {
  const [pets, setPets] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null); // State to hold selected pet for details
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/pet/all'); // Update with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch pet listings');
        }
        const data = await response.json();
        setPets(data.animals); // Update state with fetched pet listings
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPets(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  // Render loading state
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Handle pet card click to show details
  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  // Close modal
  const closeModal = () => {
    setSelectedPet(null);
  };

  // Function to get a random image from the images array
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Render pet listings
  return (
    <div className="pet-listings-page">
      <h1 className="page-title">Pet Listings</h1>
      <div className="pet-listings">
        {pets.map((pet) => (
          <div key={pet._id} className="pet-card" onClick={() => handlePetClick(pet)}>
            <h2 className="pet-name">{pet.name}</h2>
            <img className="pet-image" src={getRandomImage()} alt={pet.name} /> {/* Random image */}
            <p className="pet-type">Type: {pet.type}</p>
            <p className="pet-age">Age: {pet.age} years</p>
            <button 
              className="adopt-button" 
              onClick={() => navigate(`/pets/${pet._id}`)} // Use navigate for routing
            >
              Adopt
            </button>
          </div>
        ))}
      </div>

      {/* Modal for pet details */}
      {selectedPet && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPet.name}</h2>
            <img className="modal-image" src={selectedPet.image} alt={selectedPet.name} />
            <p><strong>Type:</strong> {selectedPet.type}</p>
            <p><strong>Age:</strong> {selectedPet.age} years</p>
            <p><strong>Description:</strong> {selectedPet.description}</p>
            <p><strong>Color:</strong> {selectedPet.color}</p>
            <p><strong>Breed:</strong> {selectedPet.breed}</p>
            <p><strong>Neutered:</strong> {selectedPet.neutered ? 'Yes' : 'No'}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PetListingsPage;
