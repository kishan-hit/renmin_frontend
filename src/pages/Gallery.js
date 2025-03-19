import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";

const Gallery = () => {
  return (
    <div className="z-0 tracking-wide md:tracking-wide">
      <NavBar />
      <div className="mt-[5.8rem]">
        <div className="section px-3 md:px-16 lg:px-40 py-4 md:py-8 lg:py-10 overflow-hidden">
          <PhotoGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
