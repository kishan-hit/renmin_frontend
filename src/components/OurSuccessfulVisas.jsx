import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const importAll = (r) => r.keys().map(r);
const visaImages = importAll(require.context("../assets/images/visas", false, /\.(jpeg)$/));

const OurSuccessfulVisas = () => {
    return (
        <section className="bg-[#bf1d1d] py-12 px-6 relative">
            <div className="max-w-7xl mx-auto text-center text-white mb-6">
                <h2 className="text-4xl font-bold">Our Successful Visas</h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 overflow-visible">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="overflow-visible"
                >
                    {visaImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                                <img src={image} alt={`Visa ${index + 1}`} className="w-full h-96 object-cover rounded-md transition-all duration-500" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurSuccessfulVisas;