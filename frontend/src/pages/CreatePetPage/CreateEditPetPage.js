import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import { addPet } from '../../api/DashboardApi'; // Adjust the import path to your API file
import "./css/CreateEditPetPage.css"; // Optional CSS for styling

const CreateEditPetPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [petData, setPetData] = useState({
    ID: "",
    name: "",
    age: "",
    sex: "",
    breed: "",
    date_found: "",
    adoptable_from: "",
    posted: "",
    color: "",
    coat: "",
    size: "",
    neutered: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting pet data:", petData); // Log the petData to check its structure

    try {
      await addPet({
        ...petData,
        age: Number(petData.age),
        ID: Number(petData.ID),
      });
      alert("Pet added successfully!");
      navigate('/dashboard');
    } catch (error) {
      console.error("Error adding pet:", error); // Log the entire error for more context
      alert("Failed to add pet. Please try again.");
    }
  };

  return (
    <div className="add-pet-page">
      <h1 className="add-pet-title">Add New Pet</h1>
      <form onSubmit={handleSubmit} className="add-pet-form">
        {Object.keys(petData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key} className="form-label">{key.replace('_', ' ').toUpperCase()}</label>
            <input
              type={key === 'date_found' || key === 'adoptable_from' || key === 'posted' ? 'date' : 'text'}
              name={key}
              value={petData[key]}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">Add Pet</button>
      </form>
    </div>
  );
};

export default CreateEditPetPage;
