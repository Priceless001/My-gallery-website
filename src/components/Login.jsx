// src/LoginForm.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import {useNavigate } from 'react-router-dom'
import  "../styles/Login.css" 
import image4 from "../images/bg img.jpg"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate ();

  const handleLogin = async () => {
    try {
      setError('');
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/art')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className='first'>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className='first'>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
     </div>
  );
}

export default Login;