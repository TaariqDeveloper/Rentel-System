import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeaturedPropertyTypes from "../../components/propertyTypes/FeaturedPropertyTypes";
import RecentPropertyListed from "../../components/RecentPropertyListed/RecentPropertyListed";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedPropertyTypes />
      <RecentPropertyListed />
    </div>
  );
}

export default Home;
