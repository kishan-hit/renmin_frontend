import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import Stats from '../components/Stats';
import MissionVision from '../components/MissionVision';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <AboutContent />
      <Stats />
      <MissionVision />
      <Footer />
    </div>
  )
}

export default AboutPage;
