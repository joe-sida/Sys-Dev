// src/views/LoginView.jsx
import React, { useState } from 'react';
import '../App.css';

const LoginView = ({ onLogin }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!employeeId.trim()) {
      setError('Please enter your Employee ID');
      return;
    }
    
    // In a real app, you would validate credentials with a backend service
    // For now, we'll just accept any non-empty ID
    onLogin(employeeId);
  };
  
  return (
    <div className="content-container">
      <h1>AttendTrack - Instructor Login</h1>
      <p>Welcome to the attendance tracking system. Please log in with your employee ID.</p>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter your employee ID"
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;