import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import LoginForm from './components/LoginForm/Login';
import SignupForm from './components/SignupForm/Signup';
import Home from './components/HomePage/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
