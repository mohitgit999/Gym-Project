import React from 'react';
import { FaDumbbell, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <FaDumbbell className="text-accent" />
            <span>LUMIN<span className="text-accent">FIT</span></span>
          </a>
          <p className="footer-text">
            Elevating fitness to an art form. Join us and transform your body and mind in our state-of-the-art facilities.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Fitness Ave, NY 10001</p>
          <p>info@luminfit.com</p>
          <p>(555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2026 LuminFit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
