import React from 'react';
import NavBar from '../components/NavBar';
import Location from '../components/Location';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Location />
      <Footer />
    </div>
  )
}

export default ContactPage