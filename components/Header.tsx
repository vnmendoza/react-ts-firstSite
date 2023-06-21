// components/Header.tsx

import * as React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.container}>
      <h1 style={styles.name}>Your Name</h1>
      <h2 style={styles.title}>Title / Position</h2>
      <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum.
      </p>
    </header>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f8f8',
    padding: '2rem',
    textAlign: 'center',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.5',
  },
};

export default Header;
