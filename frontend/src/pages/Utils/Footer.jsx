import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>FurEver Home</h3>
          <p>Helping pets find loving homes, one paw at a time.</p>
        </div>
        
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/" style={styles.footerLink}>Home</a></li>
            <li><a href="/adopt" style={styles.footerLink}>Adopt</a></li>
            <li><a href="/donate" style={styles.footerLink}>Donate</a></li>
            <li><a href="/contact" style={styles.footerLink}>Contact Us</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Contact Us</h3>
          <p>Email: contact@fureverhome.com</p>
          <p>Phone: +123 456 7890</p>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>🐾</a>
            <a href="#" style={styles.icon}>🐕</a>
            <a href="#" style={styles.icon}>🐈</a>
          </div>
        </div>
      </div>
      
      <div style={styles.footerBottom}>
        <p>&copy; 2024 FurEver Home. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
  },
  column: {
    flex: '1',
    minWidth: '200px',
  },
  columnTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  footerLink: {
    color: '#ff8a65',
    textDecoration: 'none',
  },
  footerBottom: {
    marginTop: '2rem',
    borderTop: '1px solid #555',
    paddingTop: '1rem',
  },
  socialIcons: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#ff8a65',
    textDecoration: 'none',
  }
};

export default Footer;
