
import React from 'react';
import './forget.css'; // Import CSS file for styling
function BasicExample() {
  return (
    <form className='formreset'>
        <div className='formreset'>
        <h1>Reset Password</h1>
      <form className="mb-3" controlId="formBasicEmail">
        <label>Email address</label>
        <input type="email" placeholder="Enter email" />
       <p>
          We'll never share your email with anyone else.
        </p>
      </form>

      <form className="mb-3" controlId="formBasicPassword">
        <label>New Password</label>
        <input type="password" placeholder="Password" />
      </form> 
      <div className='buttondiv'> 
      <button className='buttonreset' variant="primary" type="submit">
        Submit
      </button>
      </div>
      </div>
    </form>
  );
}

export default BasicExample;