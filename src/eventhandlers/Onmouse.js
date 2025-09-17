import React, { useState } from 'react';

const Onmouse = () => {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('Mouse is over the button');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse left the button');
  };

  return (
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover over me
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Onmouse;

// when we cilck on mouse it will be displaying the mouse is over the button!!
// when we cilck on mouse it wii be displaying the mouse is left the button!!