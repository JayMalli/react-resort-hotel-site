import React from "react";
const Hero = ({ hero }) => {
  return <div className={`${hero ? "defaultHero" : "roomsHero"}`}></div>;
};

export default Hero;
