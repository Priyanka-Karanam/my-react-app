import React from 'react';
const Eboundary = ({ children }) => { try {
return children;
} catch (error) {
return <h1>Something went wrong!</h1>;

}
};
export default Eboundary;
