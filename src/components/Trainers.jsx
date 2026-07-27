import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import './Trainers.css';

const trainersData = [
  {
    id: 1,
    name: 'Marcus Vance',
    specialty: 'Strength & Conditioning',
    image: '/trainer1.png',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    specialty: 'HIIT & Mobility',
    image: '/trainer2.png',
  },
  {
    id: 3,
    name: 'David Chen',
    specialty: 'Powerlifting Specialist',
    image: '/trainer3.png',
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Meet Our <span className="text-accent">Elite Trainers</span></h2>
          <p className="section-subtitle">Push beyond your limits with the guidance of industry-leading professionals.</p>
        </div>

        <div className="trainers-grid">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-img-wrapper">
                <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                <div className="trainer-overlay">
                  <div className="trainer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                  </div>
                </div>
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="text-accent">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
