import React from 'react';
import locationIcon from '../assets/images/icons/map-pin-line.png';
import phoneIcon from '../assets/images/icons/phone-line.svg';
import emailIcon from '../assets/images/icons/mail-line.svg';

const Location = () => {
    return (
        <div className='section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-12 mt-16 md:mt-20 lg:mt-24 overflow-hidden'>
            <h2 className="text-center text-blue-900 text-4xl font-bold">Contact Us</h2>
            <div className='flex flex-col md:flex-row w-full justify-center mt-2 md:mt-8 gap-4'>
                <div className='w-full md:w-[50%] aspect-square flex flex-col justify-center items-center box-border md:justify-start md:items-start'>
                    <div className='text-center md:text-left'>
                        <div className='font-semibold text-lg text-[#990011FF] mb-2'>Renmin Education</div>
                        <div className='text-base'>3 rd Floor Logix Park Near Sector 16 Metro station Noida Uttar Pradesh India - 201301</div>

                        <div className='mt-4'>
                            <div className='flex flex-col md:flex-row md:justify-between'>
                                <div className='flex flex-col items-center md:items-start justify-center mb-2'>
                                    <div className='flex'>
                                        <img src={phoneIcon} alt='phone' className='mr-2 w-5 h-5' />
                                        <div className='font-bold'>Call Us : </div>
                                    </div>
                                    <div>
                                        <a href='tel:+91-(033) 4603 1489'>+91 7033 919 405</a>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center md:items-start justify-center mb-2'>
                                    <div className='flex'>
                                        <img src={emailIcon} alt='email' className='mr-2 w-5 h-5' />
                                        <div className='font-bold'>Email Us : </div>
                                    </div>

                                    <div>
                                        <a href="mailto:renmineducation@gmail.com">renmineducation@gmail.com</a>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-4 flex items-center justify-center md:justify-start'>
                                <a href='https://maps.app.goo.gl/p7SRxfELNUchFwe18' target="_blank" rel="noreferrer" className='flex items-center text-[#990011FF]'>
                                    <img src={locationIcon} alt='location' className='mr-2 w-5 h-5' />
                                    Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[50%] aspect-square mt-8 md:mt-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.366026450838!2d77.30557948350906!3d28.57927991171211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d98ee6d3c5%3A0x34c5ea3d0f04f8a7!2sLogix%20Park!5e0!3m2!1sen!2sin!4v1740300306978!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='h-full w-full'
                        title='map'>
                    </iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.366026450838!2d77.30557948350906!3d28.57927991171211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d98ee6d3c5%3A0x34c5ea3d0f04f8a7!2sLogix%20Park!5e0!3m2!1sen!2sin!4v1740300306978!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </div>
        </div>
    )
}

export default Location