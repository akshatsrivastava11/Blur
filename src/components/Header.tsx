import React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header style={{
      backgroundColor: '#1a1a1b',
      padding: '10px 0',
      borderBottom: '1px solid #343536'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          color: '#ff4500',
          fontSize: '24px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>Blur</Link>
        <div>
          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid #d7dadc',
            color: '#d7dadc',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          >
            <Link to='/login'>Login
            </Link>
          </button>
          <button style={{
            backgroundColor: '#ff4500',
            border: 'none',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            <Link to='/Signup'>Sign-up
            </Link>

          </button>
        </div>
      </div>
    </header>
  );
};
