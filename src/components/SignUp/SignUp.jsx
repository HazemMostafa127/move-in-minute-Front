

// import React from 'react'
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './SignUp.css'; // Import CSS file for styling

function SignUpForm() {
  const [mode, setMode] = useState('professional'); // State to track the mode

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
  };

  // eslint-disable-next-line no-undef
  return (
    <div className="SignUp">
      <Navbar></Navbar>
     
      <div className="mode-selector">
        {/* eslint-disable-next-line no-undef */}
        {/* eslint-disable-next-line no-undef */}
      </div>
      <form className='signUpForm'>
      <h2 className='login'>SignUp </h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Phone:</label>
          <input type="password" className="form-control" id="password" placeholder="Enter The Number" />
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;