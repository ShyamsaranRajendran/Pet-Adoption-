import React, { useState } from 'react';

function FavoritesPage() {
  // Sample data for favorite animals
  const [favoriteAnimals] = useState([
    { id: 1, name: 'Dog', species: 'Canine' },
    { id: 2, name: 'Cat', species: 'Feline' },
    { id: 3, name: 'Rabbit', species: 'Lagomorph' },
    { id: 4, name: 'Parrot', species: 'Bird' },
  ]);

  return (
    <div>
      <h1>Your Favorite Animals</h1>
      {favoriteAnimals.length > 0 ? (
        <ul>
          {favoriteAnimals.map((animal) => (
            <li key={animal.id}>
              <strong>{animal.name}</strong> ({animal.species})
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite animals added yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
