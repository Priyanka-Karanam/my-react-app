import React, { useState } from 'react';

const Onclickp = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button was clicked done !');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
};

export default Onclickp;
// when we cilck on button it will give the set message