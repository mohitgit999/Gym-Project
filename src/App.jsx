import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Classes from './components/Classes'
import Experience from './components/Experience'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import About from './components/About'
import Footer from './components/Footer'
import CustomPlanViewer from './components/CustomPlanViewer'
import Auth from './components/Auth'

import CustomCursor from './components/CustomCursor'

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Basic routing based on query params
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'my-plan') {
      setCurrentView('my-plan');
    } else if (params.get('view') === 'auth') {
      setCurrentView('auth');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.section, .footer');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (currentView === 'my-plan') {
    return (
      <>
        <CustomCursor />
        <CustomPlanViewer />
      </>
    );
  }

  if (currentView === 'auth') {
    return (
      <>
        <CustomCursor />
        <Auth />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Experience />
      <Trainers />
      <Testimonials />
      <Newsletter />
      <About />
      <Footer />
    </>
  )
}

export default App
