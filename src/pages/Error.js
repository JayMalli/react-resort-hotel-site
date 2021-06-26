import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="hero">
      <Hero hero={true}></Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/" className="btn-primary">
          return Home
        </Link>
      </Banner>
    </div>
  );
};

export default Error;
