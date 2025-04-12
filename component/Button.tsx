'use client';

import React from 'react';
import { useState } from 'react';

interface StyledButtonProps {
  title: string;
}

function StyledButton({ title }: StyledButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    /*alert('Button clicked!');*/
  };

  const buttonStyle = {
    backgroundColor: isClicked ? '#4CAF50' : '#008CBA',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {isClicked ? 'Clicked!' : title}
    </button>
  );
}

export default StyledButton;
