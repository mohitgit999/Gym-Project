import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Your Success</h2>
          <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem'}}>Stories, Our Inspiration</h2>
          <p className="section-subtitle" style={{fontSize: '0.9rem', marginTop: '1rem'}}>See how FiTusion has transformed the lives of our members.</p>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-large-card">
            <img src="/gym_hero.png" alt="Success Story" className="t-large-img" />
            <div className="t-large-info">
              <p className="quote">"I never thought I could achieve this level of fitness. The trainers at FiTusion pushed me beyond my perceived limits."</p>
              <h4>- John Doe</h4>
            </div>
          </div>

          <div className="testimonial-small-cards">
            <div className="t-small-card">
              <img src="/trainer1.png" alt="Member" className="t-small-img" />
              <div className="t-small-info">
                <h4>Alex S.</h4>
              </div>
            </div>
            <div className="t-small-card">
              <img src="/trainer2.png" alt="Member" className="t-small-img" />
              <div className="t-small-info">
                <h4>Sarah W.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
