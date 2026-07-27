import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">
          Forge Your <br />
          <span className="text-accent">Legacy</span>
        </h1>
        <p className="hero-subtitle">
          Experience premium fitness with state-of-the-art equipment, elite trainers, and an atmosphere designed to push your limits.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Start Your Journey</button>
          <button className="btn btn-outline">Explore Classes</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
