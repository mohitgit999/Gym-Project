import React from 'react';
import './Classes.css';

const classesData = [
  {
    id: 1,
    title: 'High Intensity Interval Training',
    description: 'Push your limits with our signature HIIT classes designed to burn maximum calories.',
    image: '/gym_class.png',
    time: '45 Min',
    level: 'All Levels'
  },
  {
    id: 2,
    title: 'Strength & Conditioning',
    description: 'Build functional strength and power with our expert-led weightlifting sessions.',
    image: '/gym_class_strength.png',
    time: '60 Min',
    level: 'Intermediate/Advanced'
  },
  {
    id: 3,
    title: 'Yoga & Mobility',
    description: 'Enhance your flexibility, balance, and recovery in our calming studio environment.',
    image: '/gym_class_yoga.png',
    time: '50 Min',
    level: 'All Levels'
  }
];

const Classes = () => {
  return (
    <section id="classes" className="section classes">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Elite <span className="text-accent">Classes</span></h2>
          <p className="section-subtitle">Discover workouts designed to transform your body and mind.</p>
        </div>

        <div className="classes-grid">
          {classesData.map((cls) => (
            <div key={cls.id} className="class-card">
              <div className="class-img-container">
                <img src={cls.image} alt={cls.title} className="class-img" />
                <div className="class-badges">
                  <span className="badge">{cls.time}</span>
                  <span className="badge badge-accent">{cls.level}</span>
                </div>
              </div>
              <div className="class-content">
                <h3>{cls.title}</h3>
                <p>{cls.description}</p>
                <a href="#pricing" className="class-link">Join Class <span>&rarr;</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
