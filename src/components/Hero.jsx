import React, { useState } from 'react';
import { FaClock, FaRunning, FaFireAlt, FaDumbbell } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Gradient */}
      <div className="hero-radial-glow"></div>

      {/* Main Typography Background */}
      <div className="hero-bg-text">
        <h1 className="hero-title-main">
          <span className="text-gradient">Sculpt </span>
          <span className="text-outline">Your </span>
          <span className="text-gradient">Body,</span>
          <br />
          <span className="text-gradient">Elevate </span>
          <span className="text-outline">Your </span>
          <span className="text-gradient">Spirit</span>
        </h1>
      </div>

      {/* Central Image (Using standard gym hero or placeholder as requested) */}
      <div className="hero-center-img-container animate-fade-in-up">
        <img src="/gym_hero.png" alt="Bodybuilder" className="hero-center-img" />
        
        {/* Floating Stat Cards */}
        <div className="hero-stat-card card-top-left floating-slow">
          <FaClock className="stat-icon" />
          <p className="stat-label">Hours</p>
          <p className="stat-value">1.5</p>
        </div>
        <div className="hero-stat-card card-top-right floating-medium">
          <FaRunning className="stat-icon" />
          <p className="stat-label">Poses</p>
          <p className="stat-value">20</p>
        </div>
        <div className="hero-stat-card card-bottom-left floating-fast">
          <FaFireAlt className="stat-icon" />
          <p className="stat-label">Kcal</p>
          <p className="stat-value">550</p>
        </div>
        <div className="hero-stat-card card-bottom-right floating-slow">
          <FaDumbbell className="stat-icon" />
          <p className="stat-label">Sets</p>
          <p className="stat-value">5</p>
        </div>
      </div>

      {/* Side Navigation Text */}
      <div className="hero-side-text left-side">
        <span>P</span><span>R</span><span>E</span><span>V</span>
      </div>
      <div className="hero-side-text right-side">
        <span>N</span><span>E</span><span>X</span><span>T</span>
      </div>

      {/* Bottom Elements */}
      <div className="hero-bottom-bar container" style={{ justifyContent: 'center' }}>
        <a href="#exercise" className="btn btn-primary pill-btn interactive premium-glow">
          Let's Start &gt;&gt;&gt;
        </a>
      </div>
    </section>
  );
};

export default Hero;
