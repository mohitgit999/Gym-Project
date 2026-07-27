import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#home" className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon" style={{marginRight: '8px'}}>
              <path d="M4 10L14 2L12 10H20L10 22L12 14H4V10Z" fill="var(--accent-primary)"/>
            </svg>
            <span style={{fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem'}}>FiTusion</span>
          </a>
          <p className="footer-copy">&copy; 2026 FiTusion. All rights reserved.</p>
        </div>
        
        <div className="footer-center">
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="interactive"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="interactive"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="interactive"><FaFacebook /></a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="#home" className="interactive">Home</a>
            <a href="#about" className="interactive">About</a>
            <a href="#features" className="interactive">Features</a>
            <a href="#newsletter" className="interactive">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
