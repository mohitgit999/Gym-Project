import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(localStorage.getItem('currentUser'));
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon" style={{marginRight: '8px'}}>
            <path d="M4 10L14 2L12 10H20L10 22L12 14H4V10Z" fill="var(--accent-primary)"/>
          </svg>
          <span style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0px'}}>FiTusion</span>
        </a>

        {/* Centered Links */}
        <div className={`nav-links-center ${menuOpen ? 'open' : ''}`}>
          <a href="#home" className="active" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a>
          <a href="#exercise" onClick={() => setMenuOpen(false)}>Exercise</a>
        </div>

        {/* Right Buttons */}
        <div className="nav-actions">
          <a href="#newsletter" className="btn btn-outline btn-sm interactive hide-mobile" style={{borderRadius: '50px'}}>Contact Us</a>
          {currentUser ? (
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem'}}>
              <span style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Hi, <strong style={{color: 'var(--accent-primary)'}}>{currentUser}</strong></span>
              <button 
                className="btn btn-primary btn-sm interactive" 
                style={{borderRadius: '50px'}}
                onClick={() => {
                  localStorage.removeItem('currentUser');
                  setCurrentUser(null);
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/?view=auth" className="btn btn-primary btn-sm interactive" style={{borderRadius: '50px', marginLeft: '1rem'}}>
              Login / Sign Up
            </a>
          )}
        </div>

        <div className="menu-toggle interactive" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
