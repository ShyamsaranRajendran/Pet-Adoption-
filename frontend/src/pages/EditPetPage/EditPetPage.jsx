import React, { useState, useEffect } from "react";
import "./css/CreateEditPetPage.css"; // Optional CSS for styling

const EditPetPage = ({ match }) => {
  const [petData, setPetData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    // Simulate fetching pet data when editing
    const fetchPetData = () => {
      const simulatedData = {
        id: match.params.id,
        name: "Simulated Pet Name",
        type: "Dog",
        breed: "Labrador",
        age: "2 years",
        description: "A friendly and energetic dog.",
        image: "http://example.com/pet-image.jpg",
      };
      setPetData(simulatedData);
    };
    fetchPetData();
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated API request for updating the pet
    console.log("Updating Pet Data:", petData);
    alert("Pet updated successfully!");
    // Reset form after submission
  };

  return (
    <div className="create-edit-pet-page">
      <h1>Edit Pet</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Pet Name</label>
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Pet Type</label>
          <input
            type="text"
            name="type"
            value={petData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            name="breed"
            value={petData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={petData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={petData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            name="image"
            value={petData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Update Pet
        </button>
      </form>
    </div>
  );
};

export default EditPetPage;
