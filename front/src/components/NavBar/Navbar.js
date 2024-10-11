
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/LOGO.png'

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const signOut = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="navbar-name">Voyaige</span>
      </Link>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <button onClick={signOut} className="auth-button">Log Out</button>
        ) : (
          <Link to="/login" className="auth-button">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
