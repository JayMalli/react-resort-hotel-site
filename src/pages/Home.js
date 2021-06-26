import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
const Home = () => {
  return (
    <>
      <div className="hero">
        <Hero hero={true}></Hero>
        <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </div>
      <Services></Services>
      <FeaturedRooms />
    </>
  );
};

export default Home;
