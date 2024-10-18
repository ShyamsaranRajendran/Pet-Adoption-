import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Import your CSS for styling

function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated by checking localStorage
  useEffect(() => {
    const authKey = localStorage.getItem('authentication'); // Get the authentication key from localStorage
    if (authKey) {
      setIsAuthenticated(true); // If key exists, user is authenticated
    }
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Pet Zen!</h1>
        <p>Your go-to place for adopting and loving pets.</p>
        <p>Discover the joy of having a pet companion by exploring our site.</p>
      </header>

      <section className="about-section">
        <h2>Why Choose Pet Zen?</h2>
        <p>
          At Pet Zen, we believe every pet deserves a loving home. We make it easy for you to find the perfect companion and offer guidance to ensure the best match.
          Our team works closely with shelters and rescue organizations to bring you a wide variety of pets that need a forever home. 
        </p>
        <p>
          Whether you're looking to adopt a dog, cat, or any other pet, we're here to help you in every step of the way—from finding the right match to providing post-adoption support.
        </p>
      </section>

      <section className="features-section">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Available Pets:</strong> Browse our wide selection of pets, filtered by type, breed, and age.</li>
          <li><strong>Support:</strong> Get advice on pet care and adoption processes from our experienced team.</li>
          <li><strong>Community:</strong> Join our community events and connect with other pet lovers and adopters.</li>
          <li><strong>Resources:</strong> Access our extensive library of pet care tips and expert advice on how to welcome your new friend.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>How to Get Started</h2>
        <p>Ready to find your new pet companion? Sign up today and start exploring the pets available for adoption. If you're already a member, simply log in and continue your journey.</p>

        {!isAuthenticated && (
          <div className="auth-btns">
            <div className="login">
              <a href="/login">
                <button className="auth-btn">Login</button>
              </a>
            </div>
            <div className="sign">
              <a href="/register">
                <button className="auth-btn">Sign Up</button>
              </a>
            </div>
          </div>
        )}

        {isAuthenticated && (
          <p>Welcome back! You are logged in. Enjoy exploring our pet adoption services.</p>
        )}
      </section>

      <footer className="home-footer">
        <p>© 2024 Pet Zen. All rights reserved. | <a href="/privacy">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

export default HomePage;
