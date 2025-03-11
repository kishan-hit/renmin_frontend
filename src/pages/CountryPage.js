import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CountryInfo from "../components/countyInfo/CountryInfo";
import countriesData from "../assets/data/countriesData";

const CountryPage = () => {
  const { countryName } = useParams();
  const countryData = countriesData[countryName?.toLowerCase()];

  return (
    <div className="bg-gray-100 flex flex-col overflow-x-hidden">
      <NavBar />
      <div className="flex justify-center">
        {countryData && (
          <div className="container mt-[110px]">
            <CountryInfo {...countryData} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CountryPage;
