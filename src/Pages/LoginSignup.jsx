import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !password || !agree) {
      setError('All fields are required and you must agree to the terms.');
    } else {
      setError('');
      // Handle form submission logic here
      console.log('Form submitted:', { name, email, password });
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input 
            type="text" 
            placeholder='Your Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder='Email Address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {error && <p className="loginsignup-error">{error}</p>}
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">Already have an Account? <span>Login Here.</span></p>
        <div className="loginsignup-agree">
          <input 
            type="checkbox" 
            checked={agree} 
            onChange={(e) => setAgree(e.target.checked)} 
          />
          <p>By continuing, I agree to the terms of use and privacy policy of @BIGN.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

