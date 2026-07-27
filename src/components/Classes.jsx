import React, { useState } from 'react';
import './Classes.css';
import CustomWorkoutModal from './CustomWorkoutModal';
import { FaPlus } from 'react-icons/fa';

const trainingPrograms = [
  { id: 1, title: 'Barbell Squats', image: '/gym_class_strength.png' },
  { id: 2, title: 'Kettlebell Swing', image: '/gym_class.png' },
  { id: 3, title: 'Battle Rope Workout', image: '/gym_class_yoga.png' },
  { id: 4, title: 'Core Training', image: '/gym_class.png' },
  { id: 5, title: 'Cardio Training', image: '/gym_class_strength.png' },
  { id: 6, title: 'Full Body Workout', image: '/gym_class_yoga.png' },
];

const Classes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="exercise" className="section train-smarter-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title" style={{textTransform: 'none', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Train Smarter</h2>
          <h2 className="section-title text-accent" style={{textTransform: 'none', fontSize: '2.5rem'}}>Unleash Your Potential</h2>
          <p className="section-subtitle" style={{fontSize: '0.9rem', marginTop: '1rem'}}>
            Experience the most effective workout routines designed to maximize your strength and endurance.
          </p>
        </div>

        <div className="training-grid">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="training-card interactive">
              <div className="training-img-wrapper">
                <img src={program.image} alt={program.title} className="training-img" />
                <div className="training-overlay"></div>
                <div className="training-corner-accent"></div>
              </div>
              <h3 className="training-title text-accent">{program.title}</h3>
            </div>
          ))}

          {/* Create Custom Plan Card */}
          <div 
            className="training-card interactive custom-plan-card" 
            onClick={() => {
              const user = localStorage.getItem('currentUser');
              if (user) {
                setIsModalOpen(true);
              } else {
                window.location.href = '/?view=auth';
              }
            }}
          >
            <div className="training-img-wrapper custom-plan-wrapper">
              <img src="/gym_hero.png" alt="Build Routine" className="custom-plan-img" />
              <div className="custom-plan-placeholder">
                <div className="icon-container">
                  <FaPlus className="custom-plan-icon" />
                </div>
                <h2>Build Your Custom Routine</h2>
                <p>Click here to craft a personalized weekly plan</p>
              </div>
              <div className="training-overlay"></div>
              <div className="training-corner-accent"></div>
            </div>
          </div>
        </div>
      </div>

      <CustomWorkoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Classes;
