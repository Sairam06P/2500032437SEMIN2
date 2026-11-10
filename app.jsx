
// App.jsx
import React from 'react';

function AlertBox({ message, color }) {
  const isSuccess = color === 'green';

  const alertStyles = {
    padding: '15px 20px',
    margin: '10px 0',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: isSuccess ? '#2e7d32' : '#c62828',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={alertStyles}>
      <strong>{isSuccess ? 'Success: ' : 'Error: '}</strong>
      {message}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Experiment 05 - Alert Box</h2>
      <AlertBox message="Operation completed successfully!" color="green" />
      <AlertBox message="An error occurred while saving data." color="red" />
    </div>
  );
}