import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      console.log('Login form data:', formData);
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      console.log('Login response:', res.data);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/home');
    } catch (err) {
      console.error('Error logging in:', err.response ? err.response.data : err.message);
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
      } else if (err.request) {
        console.error('Request data:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
      alert('Error logging in');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={onSubmit}>
        <h1>Log-in</h1>
        <div className='input-box'>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Email'
            required
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='Password'
            required
          />
          <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type='submit'>Log In</button>
        <div className='register-link'>
          <p>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
