import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section id="newsletter" className="section newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <div className="section-header text-center" style={{marginBottom: '2rem'}}>
            <h2 className="section-title" style={{textTransform: 'none', fontSize: '3rem', color: '#000'}}>Connect Engage Transform</h2>
            <p className="section-subtitle" style={{color: 'rgba(0,0,0,0.7)', maxWidth: '600px', margin: '0.5rem auto'}}>
              Subscribe to our newsletter for the latest workouts, nutrition tips, and community events.
            </p>
          </div>
          
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing to our newsletter!"); }}>
            <input type="email" placeholder="Enter your email address..." required className="newsletter-input interactive" />
            <button type="submit" className="btn btn-primary btn-sm newsletter-btn interactive">Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
