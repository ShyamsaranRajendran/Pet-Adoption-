import React, { useState } from 'react';
import { loginUser } from '../../api/userApi'; // Correct path
import './css/logincss.css'; // Import the CSS

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const data = await loginUser(credentials);
      setSuccessMessage(data.message || "Login successful!");

      // Set the token in local storage
      localStorage.setItem('authentication', data.token); // Save token to local storage

      // Optionally, redirect or update the UI to reflect the logged-in state
      // For example, redirect to the home page:
      if(data.status === 1)
      {
         window.location.href = '/dashboard'; 
      }else{
         window.location.href = '/'; 
      }

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back to Pet Zen!</h2>
      <p className="intro-text">Login to access your account and discover new pets waiting for a home. If you don’t have an account, sign up to join our community.</p>
      
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">Login</button>
      </form>

      <div className="login-options">
        <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
        <p>Don't have an account? <a href="/register" className="signup-link">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
