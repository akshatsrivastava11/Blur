import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import AllPosts from './AllPosts';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export const Page = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#1a1a1b',
        color: '#d7dadc',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw', // Ensures the container spans full screen width
        overflowX: 'hidden', // Prevents horizontal scrollbars
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          padding: '20px 0',
        }}
      >
        <div
          style={{
            width: '100%', // Full width container
            padding: '0 20px', // Responsive padding
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ marginBottom: '20px', width: '100%', maxWidth: '1200px' }}>
            <button
              style={{
                backgroundColor: '#ff4500',
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
              }}
            >
              <span style={{ marginRight: '5px', fontSize: '18px' }}>+</span>
              <Link to='/Add-post' >Create Post</Link>
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1200px',
            }}
          >
            <div style={{ flex: '2 1 600px', minWidth: '300px' }}>
              <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>All Posts</h1>
              <AllPosts />
            </div>
            <div style={{ flex: '1 1 300px', minWidth: '200px' }}>
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
