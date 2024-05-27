// import React from 'react'
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css'; // Import CSS file for styling

function LoginForm() {
  const [mode, setMode] = useState('professional'); // State to track the mode

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
  };

  // eslint-disable-next-line no-undef
  return (
    <div className="login">
      <Navbar></Navbar>
      
      <div className="mode-selector">
        {/* eslint-disable-next-line no-undef */}
        {/* eslint-disable-next-line no-undef */}
      </div>
      <form className='formLogin'>
      <h2 className='login'>Login </h2>
        <div className="form-group">
          <label className='label' htmlFor="email">Email address:</label>
           <input type="email" className="form-control-login" id="email" placeholder="Enter email" />
         
        {/* </div>
        <div className="form-group"> */}
          <label className='label' htmlFor="password">Password:</label>
          <input type="password" className="form-control-login" id="password" placeholder="Enter password" />
        </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
      <label className="form-check-label" htmlFor="form2Example31"> Remember me </label><br />
        <a href="./Forget">Forgot password?</a>
    </div>
        <div className="col">
  {/* Simple link */}

</div>


        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;

