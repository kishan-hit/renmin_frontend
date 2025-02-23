import React from 'react'
import Services from '../components/Services'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ServiceContent from '../components/ServiceContent'
import WhyChooseUs from '../components/WhyChooseUs'

const ServicePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <ServiceContent />
            <Services />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}

export default ServicePage