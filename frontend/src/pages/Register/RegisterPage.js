import React, { useState } from 'react';
import { registerUser } from '../../api/userApi'; // Correct path
import './css/register.css'; // Import the CSS for styling

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccessMessage('');

  try {
    const data = await registerUser(formData);
    setSuccessMessage(data.success || 'You will receive an email notification.');
    
    // Reset form after successful registration
    setFormData({
      name: '',
      email: '',
      username: '',
      password: '',
      phoneNumber: '',
    });

    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000); // Redirect after 2 seconds
  } catch (err) {
    // Check if the error is from the server response
    if (err.response && err.response.data) {
      setError(err.response.data.error || 'An unexpected error occurred. Please try again.');
    } else {
      // Network error or other issues
      setError('Network error. Please check your connection and try again.');
    }
  }
};



  return (
    <div className="register-container">
      <h2>Join Pet Zen Today!</h2>
      <p className="intro-text">Create an account and start your journey of adopting your perfect pet companion. Fill in the details below to register.</p>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Choose a username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Register</button>
      </form>

      <div className="additional-info">
        <p>Already have an account? <a href="/login" className="login-link">Login here</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
