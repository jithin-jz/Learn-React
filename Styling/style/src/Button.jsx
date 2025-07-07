import React from 'react';
import './Button.css';

const Button = () => {
  const styles = {
    backgroundColor: 'rgb(34, 110, 11)',
    color: 'white',
    width: '110px',
    borderRadius: '20px',
    fontSize: 'large',
    fontWeight: 800,
    padding: '4px',
    borderColor: 'aquamarine',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={styles}>Subscribe</button>
    </div>
  );
};

export default Button;
