import React, { useState, useEffect } from "react";
import dog_Img from "../components/assets/dog_img.png";

const Pet = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/pet/all")
      .then((response) => response.json())
      .then((data) => {
        setPets(data.animals);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEdit = (id) => {
    console.log("Edit pet with ID:", id);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log("Delete pet with ID:", id);
    // Add your delete logic here
  };

  return (
    <div className="Adminpet">
      <h1>List of Pets</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id} className="pet-item">
            <h3>{pet.name}</h3>
            <img src={dog_Img} alt="" />
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>

            <div className="pet-buttons">
              <button onClick={() => handleEdit(pet._id)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => handleDelete(pet._id)}
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

export default Pet;
