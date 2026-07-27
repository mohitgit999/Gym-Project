import React, { useState, useEffect } from 'react';
import { FaDownload, FaFilePdf, FaFileCsv, FaFileAlt, FaArrowLeft, FaDumbbell } from 'react-icons/fa';
import './CustomPlanViewer.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const CustomPlanViewer = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const users = JSON.parse(localStorage.getItem('gymUsers')) || {};
    const userProfile = users[currentUser];

    if (userProfile && userProfile.workoutPlan) {
      try {
        setPlan(userProfile.workoutPlan);
      } catch (e) {
        console.error("Error loading plan", e);
      }
    }
  }, []);

  if (!plan) {
    return (
      <div className="viewer-container center-content">
        <h2>No Plan Found</h2>
        <p>Go back and create a custom plan first!</p>
        <button className="btn btn-primary interactive" onClick={() => window.close()}>Close Tab</button>
      </div>
    );
  }

  // --- DOWNLOAD HELPERS ---

  const downloadTextFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadTXT = () => {
    let content = "MY CUSTOM WEEKLY WORKOUT PLAN\n\n";
    DAYS.forEach(day => {
      content += `${day.toUpperCase()}\n`;
      const exercises = plan[day] || [];
      if (exercises.length === 0) {
        content += "- Rest Day\n";
      } else {
        exercises.forEach(ex => content += `- ${ex}\n`);
      }
      content += "\n";
    });
    downloadTextFile(content, 'My_Workout_Plan.txt', 'text/plain');
  };

  const handleDownloadCSV = () => {
    let content = "Day,Exercises\n";
    DAYS.forEach(day => {
      const exercises = plan[day] || [];
      const exString = exercises.length === 0 ? "Rest Day" : exercises.join(" | ");
      content += `"${day}","${exString}"\n`;
    });
    downloadTextFile(content, 'My_Workout_Plan.csv', 'text/csv');
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="viewer-container">
      {/* Background Graphic */}
      <img src="/gym_hero.png" alt="Background" className="viewer-bg-img" />
      <div className="viewer-overlay"></div>

      <div className="viewer-content">
        <header className="viewer-header">
          <div className="header-left">
            <button className="btn btn-outline btn-sm interactive hide-on-print" onClick={() => window.close()}>
              <FaArrowLeft /> Back
            </button>
            <h1><FaDumbbell className="text-accent" /> My Weekly Plan</h1>
          </div>
          
          <div className="download-options hide-on-print">
            <button className="btn btn-outline interactive" onClick={handleDownloadTXT}>
              <FaFileAlt /> .TXT
            </button>
            <button className="btn btn-outline interactive" onClick={handleDownloadCSV}>
              <FaFileCsv /> .CSV
            </button>
            <button className="btn btn-primary interactive" onClick={handleDownloadPDF}>
              <FaFilePdf /> Save PDF
            </button>
          </div>
        </header>

        <div className="plan-grid">
          {DAYS.map(day => {
            const exercises = plan[day] || [];
            const isRest = exercises.length === 0;
            return (
              <div key={day} className={`day-card ${isRest ? 'rest-day' : ''}`}>
                <div className="day-card-header">
                  <h3>{day}</h3>
                  <span className="exercise-count">{isRest ? 'Rest' : `${exercises.length} Exercises`}</span>
                </div>
                <div className="day-card-body">
                  {isRest ? (
                    <div className="rest-text">Recovery Day</div>
                  ) : (
                    <ul className="exercise-list-viewer">
                      {exercises.map((ex, idx) => (
                        <li key={idx}>
                          <span className="bullet"></span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomPlanViewer;
