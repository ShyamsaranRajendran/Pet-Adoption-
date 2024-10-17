import React, { useState } from 'react';
import "./css/CreateEditPetPage.css"; // Optional CSS for styling

const CreatePetPage = () => {
  const [petData, setPetData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated API request for creating a new pet
    console.log("Creating New Pet:", petData);
    alert('New pet created successfully!');
    // Reset form after submission
    setPetData({
      name: '',
      type: '',
      breed: '',
      age: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="create-edit-pet-page">
      <h1>Create New Pet</h1>
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
          Create Pet
        </button>
      </form>
    </div>
  );
};

export default CreatePetPage;
