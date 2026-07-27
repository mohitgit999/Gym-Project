import React from 'react';
import './Experience.css';
import { FaPlay } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Experience</h2>
          <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem'}}>Fitness Like Never Before</h2>
          <p className="section-subtitle" style={{fontSize: '0.9rem', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0'}}>
            Our premium facilities and expert trainers provide an unparalleled environment for your fitness journey.
          </p>
        </div>

        <div className="experience-grid">
          <div className="experience-card card-left">
            <div className="experience-content">
              <h3>State of the Art</h3>
              <p>Train with the best equipment.</p>
              <a href="#about" className="btn btn-primary pill-btn interactive" style={{marginTop: '1rem', display: 'inline-block'}}>Explore</a>
            </div>
            <img src="/gym_class_strength.png" alt="Gym Equipment" className="exp-img-bg" />
          </div>

          <div className="experience-card card-right">
            <div className="experience-content">
              <h3>Expert Coaching</h3>
              <p>Personalized attention.</p>
              <a href="#trainers" className="btn btn-outline pill-btn interactive" style={{marginTop: '1rem', display: 'inline-block'}}>Learn More</a>
            </div>
            <img src="/gym_hero.png" alt="Trainer" className="exp-img-bg" />
            <a href="#exercise" className="play-btn-overlay interactive">
              <FaPlay />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
