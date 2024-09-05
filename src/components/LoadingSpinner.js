import React from 'react';
import './LoadingSpinner.css'; // Ensure you create the CSS for the spinner

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default LoadingSpinner;
