import React from 'react';
const Counter = () => { 
    const count = 5;
if (count > 5) {
throw new Error("Counter limit exceeded!");
}
return <p>Count: {count}</p>;
};
export default Counter;
