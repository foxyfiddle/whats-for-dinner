'use client';

import React from 'react';
import { useState } from 'react';

interface ButtonProps {
  text: string;
  className?: string; // Optional additional CSS classes
  style: React.CSSProperties; // Inline styles
}

function Button({ text, className, style }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    /*alert('Button clicked!');*/
  };

 

  return (
    <button 
      className={className}
      style={style} // Change background color on click>
    >
      { text}
    </button>
  );
}

export default Button;
