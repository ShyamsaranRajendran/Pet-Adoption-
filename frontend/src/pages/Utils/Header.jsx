import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText}>FurEver Home</h1>
      </div>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>Home</a>
        <a href="/adopt" style={styles.navLink}>Adopt</a>
        <a href="/donate" style={styles.navLink}>Donate</a>
        <a href="/about" style={styles.navLink}>About Us</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ff8a65', // Light orange color
    color: '#fff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: "'Montserrat', sans-serif", // Custom font family if needed
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
  }
};

export default Header;
