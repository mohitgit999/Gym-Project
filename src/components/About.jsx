import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src="/gym_hero.png" alt="About FiTusion" className="about-image" />
            <div className="about-overlay"></div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>About</h2>
            <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '1.5rem'}}>FiTusion</h2>
            <p>
              At FiTusion, we believe that fitness is more than just lifting weights or running on a treadmill. It is an art form, a science, and a community all rolled into one. We are dedicated to providing a premium fitness experience that transforms not only your body, but your spirit as well.
            </p>
            <p>
              Founded with the vision of creating an inspiring environment for all fitness levels, our state-of-the-art facilities and elite trainers ensure that you have everything you need to succeed. Whether you're a beginner looking for guidance or an advanced athlete aiming to break plateaus, FiTusion is your sanctuary for growth.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>12k+</h3>
                <p>Happy Members</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Expert Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
