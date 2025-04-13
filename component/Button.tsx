'use client';

import React from 'react';
import { useState } from 'react';

interface ButtonProps {
  text: string;
  className?: string; // Optional additional CSS classes
  style?: React.CSSProperties; // Inline styles
  onClick?: () => void; // Optional click event handler
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Optional mouse enter event handler
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Optional mouse leave event handler
}

function Button({ text, className, style, onClick, onMouseEnter, onMouseLeave }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick(); // Call the parent-provided onClick handler
  };

  return (
    <button
      className={className}
      style={style}
      onClick={handleClick}
      onMouseEnter={onMouseEnter} // Pass the onMouseEnter handler
      onMouseLeave={onMouseLeave} // Pass the onMouseLeave handler
    >
      {isClicked ? 'Clicked!' : text}
    </button>
  );
}

export default Button;
