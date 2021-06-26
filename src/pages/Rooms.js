import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <div className="hero">
        <Hero hero={false}></Hero>
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            return Home
          </Link>
        </Banner>
      </div>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
