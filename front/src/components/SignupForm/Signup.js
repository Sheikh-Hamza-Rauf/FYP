import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log('Registration response:', res.data);
      alert('Registration successful, please log in.');
      navigate('/login'); // Navigate to the login page
    } catch (err) {
      console.error('Error registering:', err.response ? err.response.data : err.message);
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
      } else if (err.request) {
        console.error('Request data:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
      alert('Error registering');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={onSubmit}>
        <h1>Sign-up</h1>
        <div className='form-grid'>
          <div className='input-box'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={onChange}
              placeholder='First Name'
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Last Name'
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
              required
            />
            <MdOutlineAlternateEmail className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='tel'
              name='phoneNumber'
              value={phoneNumber}
              onChange={onChange}
              placeholder='Phone Number'
              required
            />
            <BsTelephone className='icon' />
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
          <div className='input-box'>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              placeholder='Confirm Password'
              required
            />
            <FaLock className='icon' />
          </div>
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type='submit'>Sign Up</button>
        <div className='register-link'>
          <p>
            Already have an account? <Link to='/login'>Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
