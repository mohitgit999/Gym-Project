import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes, FaPlus, FaTrash, FaDumbbell } from 'react-icons/fa';
import './CustomWorkoutModal.css';

const EXERCISES_BY_CATEGORY = {
  'Chest': ['Bench Press', 'Incline Dumbbell Press', 'Cable Crossover', 'Push-ups'],
  'Back': ['Deadlift', 'Pull-up', 'Barbell Row', 'Lat Pulldown', 'Seated Cable Row'],
  'Legs': ['Barbell Squat', 'Leg Press', 'Calf Raise', 'Lunges', 'Leg Extension', 'Leg Curl'],
  'Shoulders': ['Overhead Press', 'Lateral Raise', 'Front Raise', 'Face Pulls'],
  'Arms': ['Dumbbell Curl', 'Tricep Extension', 'Hammer Curl', 'Skull Crushers'],
  'Core': ['Plank', 'Crunches', 'Russian Twist', 'Leg Raises'],
  'Cardio & Full Body': ['Running (Treadmill)', 'Cycling', 'Rowing Machine', 'Kettlebell Swing', 'Burpees']
};

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const CustomWorkoutModal = ({ isOpen, onClose }) => {
  const [plan, setPlan] = useState({
    Monday: [], Tuesday: [], Wednesday: [], Thursday: [],
    Friday: [], Saturday: [], Sunday: []
  });
  
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedExercise, setSelectedExercise] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const users = JSON.parse(localStorage.getItem('gymUsers')) || {};
    const userProfile = users[currentUser];

    if (userProfile && userProfile.workoutPlan) {
      try {
        setPlan(prev => ({ ...prev, ...userProfile.workoutPlan }));
      } catch (e) {
        console.error("Error loading plan", e);
      }
    }
  }, []);

  // Save to localStorage when plan changes
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;
    
    // Only save if it's not the initial empty state, or just let it save.
    const users = JSON.parse(localStorage.getItem('gymUsers')) || {};
    if (users[currentUser]) {
      users[currentUser].workoutPlan = plan;
      localStorage.setItem('gymUsers', JSON.stringify(users));
    }
  }, [plan]);

  if (!isOpen) return null;

  const handleAddExercise = () => {
    if (selectedExercise && !(plan[selectedDay] || []).includes(selectedExercise)) {
      setPlan({
        ...plan,
        [selectedDay]: [...(plan[selectedDay] || []), selectedExercise]
      });
      setSelectedExercise(''); // Reset dropdown
    }
  };

  const handleRemoveExercise = (day, exerciseToRemove) => {
    setPlan({
      ...plan,
      [day]: (plan[day] || []).filter(ex => ex !== exerciseToRemove)
    });
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content animate-fade-in-up">
        <button className="close-btn interactive" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <FaDumbbell className="modal-icon text-accent" />
          <h2 className="modal-title">Custom Workout Builder</h2>
          <p className="modal-subtitle">Design your perfect weekly routine. Your plan is saved automatically.</p>
          <a href="/?view=my-plan" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm interactive" style={{marginTop: '1.5rem', display: 'inline-block'}}>
            View Full Plan in New Tab
          </a>
        </div>

        <div className="modal-body">
          {/* Day Selector */}
          <div className="day-selector">
            {DAYS.map(day => (
              <button 
                key={day} 
                className={`day-btn interactive ${selectedDay === day ? 'active' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                {day.substring(0, 3)}
              </button>
            ))}
          </div>

          <div className="builder-section">
            <h3 className="builder-day-title">{selectedDay}'s Routine</h3>
            
            <div className="add-exercise-bar">
              <select 
                className="exercise-select"
                value={selectedExercise}
                onChange={(e) => setSelectedExercise(e.target.value)}
              >
                <option value="">Select an exercise...</option>
                {Object.entries(EXERCISES_BY_CATEGORY).map(([category, exercises]) => (
                  <optgroup key={category} label={category}>
                    {exercises.map(ex => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button className="btn btn-primary btn-sm interactive" onClick={handleAddExercise}>
                <FaPlus /> Add
              </button>
            </div>

            <div className="exercise-list">
              {(!plan[selectedDay] || plan[selectedDay].length === 0) ? (
                <div className="empty-state">
                  <p>Rest day! Enjoy your recovery or add exercises above.</p>
                </div>
              ) : (
                plan[selectedDay].map((exercise, index) => (
                  <div key={index} className="exercise-item animate-fade-in-up">
                    <span>{exercise}</span>
                    <button className="remove-btn interactive" onClick={() => handleRemoveExercise(selectedDay, exercise)}>
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomWorkoutModal;
