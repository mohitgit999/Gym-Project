import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('gymUsers')) || {};

    if (isLogin) {
      // Handle Login
      if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = '/'; // Redirect to home
      } else {
        setError('Invalid username or password.');
      }
    } else {
      // Handle Signup
      if (users[username]) {
        setError('Username already exists. Please choose another.');
      } else {
        users[username] = {
          password: password,
          workoutPlan: {
            Monday: [], Tuesday: [], Wednesday: [], Thursday: [],
            Friday: [], Saturday: [], Sunday: []
          }
        };
        localStorage.setItem('gymUsers', JSON.stringify(users));
        localStorage.setItem('currentUser', username); // Auto login
        window.location.href = '/'; // Redirect to home
      }
    }
  };

  return (
    <div className="auth-container">
      <img src="/gym_hero.png" alt="Background" className="auth-bg-img" />
      <div className="auth-overlay"></div>

      <a href="/" className="auth-back-btn interactive">
        <FaArrowLeft /> Back to Home
      </a>

      <div className="auth-box animate-fade-in-up">
        <div className="auth-header">
          <h2 className="text-accent">{isLogin ? 'Welcome Back' : 'Join the Elite'}</h2>
          <p>{isLogin ? 'Log in to access your custom routine' : 'Create an account to build your plan'}</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary auth-submit-btn interactive">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              className="text-accent interactive-text" 
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setUsername('');
                setPassword('');
              }}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
