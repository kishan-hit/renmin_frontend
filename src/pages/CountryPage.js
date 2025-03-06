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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex justify-center">
        {countryData ? (
          <div className="container mt-[110px]">
            <CountryInfo {...countryData} />
          </div>
        ) : (
          <div className="text-center text-red-500 p-6">
            <h2 className="text-2xl font-bold">Country Not Found</h2>
            <p>The information for this country is currently unavailable.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CountryPage;
