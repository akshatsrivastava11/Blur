import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#272729',
      padding: '20px 0',
      marginTop: '40px',
      color: '#d7dadc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{ flex: 1 }}>
            <h3>About Us</h3>
            <p>Blur is a community of millions of people who share, discuss, and create content.</p>
          </div>
          <div style={{ flex: 1 }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/about" style={{ color: '#818384', textDecoration: 'none' }}>About</a></li>
              <li><a href="/careers" style={{ color: '#818384', textDecoration: 'none' }}>Careers</a></li>
              <li><a href="/press" style={{ color: '#818384', textDecoration: 'none' }}>Press</a></li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3>Connect</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="https://twitter.com" style={{ color: '#818384', textDecoration: 'none' }}>Twitter</a></li>
              <li><a href="https://facebook.com" style={{ color: '#818384', textDecoration: 'none' }}>Facebook</a></li>
              <li><a href="https://instagram.com" style={{ color: '#818384', textDecoration: 'none' }}>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div style={{
          marginTop: '20px',
          textAlign: 'center',
          color: '#818384'
        }}>
          <p>&copy; 2023 Blur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
