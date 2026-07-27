import React from 'react';
import { FaCheckCircle, FaStar, FaShieldAlt, FaDumbbell, FaRunning, FaFireAlt, FaLeaf, FaChartLine, FaCrown, FaUsers, FaBuilding } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <div id="features" className="features-container">
      {/* Logos Strip */}
      <div className="logos-strip section">
        <div className="container logos-grid">
          <FaDumbbell className="brand-logo" />
          <FaRunning className="brand-logo" />
          <FaFireAlt className="brand-logo" />
          <FaDumbbell className="brand-logo" />
          <FaRunning className="brand-logo" />
        </div>
      </div>

      {/* Inspired Section */}
      <section className="section inspired-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Inspired to</h2>
            <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem'}}>Inspire Your Best Self</h2>
            <p className="section-subtitle" style={{fontSize: '0.9rem', marginTop: '1rem'}}>We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.</p>
          </div>

          <div className="inspired-box">
            <div className="inspired-list">
              <div className="list-item">
                <div className="icon-wrapper"><FaLeaf className="text-accent list-icon" /></div>
                <p>Nutrition Guidance</p>
              </div>
              <div className="list-item">
                <div className="icon-wrapper"><FaDumbbell className="text-accent list-icon" /></div>
                <p>Expert Trainers</p>
              </div>
              <div className="list-item">
                <div className="icon-wrapper"><FaChartLine className="text-accent list-icon" /></div>
                <p>Progress Tracking</p>
              </div>
              <div className="list-item">
                <div className="icon-wrapper"><FaCrown className="text-accent list-icon" /></div>
                <p>Premium Membership</p>
              </div>
              <div className="list-item">
                <div className="icon-wrapper"><FaUsers className="text-accent list-icon" /></div>
                <p>Community Support</p>
              </div>
              <div className="list-item">
                <div className="icon-wrapper"><FaBuilding className="text-accent list-icon" /></div>
                <p>Next-Level Fitness Spaces</p>
              </div>
            </div>
            
            <div className="inspired-image-container">
              <img src="/gym_hero.png" alt="Inspired Bodybuilder" className="inspired-img" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="section discover-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Discover</h2>
            <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem'}}>What Sets Us Apart</h2>
            <p className="section-subtitle" style={{fontSize: '0.9rem', marginTop: '1rem'}}>Join the elite and experience fitness like never before.</p>
          </div>

          <div className="discover-grid">
            <div className="discover-card">
              <FaStar className="discover-icon" />
              <h3>Expert Coaching</h3>
              <p>Train with industry professionals who care about your form.</p>
              <a href="#trainers" className="btn btn-outline btn-sm pill-btn interactive" style={{marginTop: '1rem', display: 'inline-block'}}>More</a>
            </div>
            <div className="discover-card highlight">
              <FaShieldAlt className="discover-icon" />
              <h3>Premium Quality</h3>
              <p>State-of-the-art equipment designed for maximum results.</p>
              <a href="#exercise" className="btn btn-primary btn-sm pill-btn interactive" style={{marginTop: '1rem', display: 'inline-block'}}>Join Now</a>
            </div>
            <div className="discover-card">
              <FaDumbbell className="discover-icon" />
              <h3>Custom Plans</h3>
              <p>Tailored routines based on your unique goals and physiology.</p>
              <a href="#trainers" className="btn btn-outline btn-sm pill-btn interactive" style={{marginTop: '1rem', display: 'inline-block'}}>More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
