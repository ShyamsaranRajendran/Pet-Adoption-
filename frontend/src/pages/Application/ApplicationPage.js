import React, { useState } from "react";
import "./css/ApplicationPage.css"; // Styles for the multi-step form

const ApplicationPage = () => {
  // State for tracking form progress
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    homeType: "",
    petType: "",
    experience: "",
    additionalInfo: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form step navigation
  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send form data
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }

    const data = await response.json();
    console.log(data.message); // Log success message
    // Optionally reset form or navigate to another page
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      homeType: "",
      petType: "",
      experience: "",
      additionalInfo: ""
    });
    window.location.href="/pets";
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting your application. Please try again.'); // Handle error
  }
};


  return (
    <div className="multi-step-form">
      <h1 className="form-title">Pet Adoption Application</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Personal Information</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Home Environment</h2>
            <div className="form-group">
              <label htmlFor="address">Home Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="homeType">Type of Home</label>
              <select name="homeType" value={formData.homeType} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="farm">Farm</option>
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Pet Preferences</h2>
            <div className="form-group">
              <label htmlFor="petType">Preferred Pet Type</label>
              <select name="petType" value={formData.petType} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Describe your experience with pets"
                rows="4"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h2>Step 4: Pet Care</h2>
            <div className="form-group">
              <label htmlFor="experience">Pet Experience</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your experience with pets"
                required
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="form-step">
            <h2>Step 5: Review & Submit</h2>
            <p>
              <strong>Full Name:</strong> {formData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Home Type:</strong> {formData.homeType}
            </p>
            <p>
              <strong>Preferred Pet:</strong> {formData.petType}
            </p>
            <p>
              <strong>Additional Info:</strong> {formData.additionalInfo}
            </p>
          </div>
        )}

        <div className="form-navigation">
          {step > 1 && (
            <button type="button" className="prev-btn" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 5 ? (
            <button type="button" className="next-btn" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicationPage;
