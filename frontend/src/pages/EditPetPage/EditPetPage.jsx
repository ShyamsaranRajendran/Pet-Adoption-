import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate for routing
import { getPetById, updatePet } from "../../api/DashboardApi"; // Adjust the import path to your API file
import "./css/CreateEditPetPage.css"; // Optional CSS for styling

const EditPetPage = () => {
  const { id } = useParams(); // Use useParams to get the pet ID from the URL
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

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const data = await getPetById(id); // Fetch pet data by ID
        // Extracting fields to match the state structure
        setPetData({
          ID: data.ID?.$numberInt, // Convert to a number if needed
          name: data.name,
          age: data.age?.$numberDouble, // Convert to a number if needed
          sex: data.sex,
          breed: data.breed,
          date_found: data.date_found,
          adoptable_from: data.adoptable_from,
          posted: data.posted,
          color: data.color,
          coat: data.coat,
          size: data.size,
          neutered: data.neutered,
        });
      } catch (error) {
        console.error("Error fetching pet data:", error.message);
      }
    };

    fetchPetData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePet(id, petData); // Call the update API with pet ID and data
      alert("Pet updated successfully!");
      navigate("/dashboard"); // Redirect to the dashboard after updating
    } catch (error) {
      console.error("Error updating pet:", error.message);
      alert("Failed to update pet. Please try again.");
    }
  };

  return (
    <div className="edit-pet-page">
      <h1 className="edit-pet-title">Edit Pet Information</h1>
      <p className="edit-pet-description">
        Update the details of the pet below. Please ensure all fields are filled
        out correctly.
      </p>
      <form onSubmit={handleSubmit} className="edit-pet-form">
        {Object.keys(petData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key} className="form-label">
              {key.replace("_", " ").toUpperCase()}
            </label>
            <input
              type={
                key === "date_found" ||
                key === "adoptable_from" ||
                key === "posted"
                  ? "date"
                  : "text"
              }
              name={key}
              value={petData[key]}
              onChange={handleChange}
              required
              className="form-input"
              readOnly={key === "ID"} // Assuming ID is not editable
            />
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Update Pet
        </button>
      </form>
    </div>
  );
};

export default EditPetPage;
