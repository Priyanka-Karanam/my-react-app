import React, { useState } from 'react';

const Onsubmit = () => {
  const [address, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);  // Get the value from the input field
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload on form submission
    alert(`HEY,${address}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={address} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Onsubmit;
// when we click on submit it will give the pop as a hey hyderabad