import React, { useState } from 'react';

const Onkey = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (event) => {
    setKeyPressed(`Key pressed: ${event.key}`);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      <p>{keyPressed}</p>
    </div>
  );
};

export default Onkey;

// when the key is pressed in input fileds it will be displaying...