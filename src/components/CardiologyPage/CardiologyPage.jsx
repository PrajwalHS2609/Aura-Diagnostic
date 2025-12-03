import React from "react";
import CardiologyHeaderContent from "./CardiologyContent/CardiologyHeaderContent";
import CardiologyHeader from "./CardiologyHeader";
import CardiologyService from "./CardiologyService";

const CardiologyPage = () => {
  return (
    <div className="homepage">

      <CardiologyHeader />
      <CardiologyHeaderContent />
      <CardiologyService />

    </div>
  );
};

export default CardiologyPage;
