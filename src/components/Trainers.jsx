import React from 'react';
import './Trainers.css';

const trainersData = [
  {
    id: 1,
    name: 'Marcus Vance',
    image: '/trainer1.png',
  },
  {
    id: 2,
    name: 'Leon Stone II',
    image: '/trainer2.png',
  },
  {
    id: 3,
    name: 'Angel Ramos',
    image: '/trainer3.png',
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="section trainers-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Your Fitness</h2>
          <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem'}}>Goals, Their Expertise</h2>
          <p className="section-subtitle" style={{fontSize: '0.9rem', marginTop: '1rem'}}>Train with the best in the industry to unlock your highest potential.</p>
        </div>

        <div className="trainers-grid">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="trainer-card interactive">
              <div className="trainer-img-wrapper">
                <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                <div className="trainer-overlay"></div>
              </div>
              <div className="trainer-info">
                <h3 className="text-accent">{trainer.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
