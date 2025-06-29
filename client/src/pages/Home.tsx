import React from "react";
import Categories from "../components/CAtegories";
import MainBanner from "../components/MainBanner";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
    </div>
  );
};

export default Home;
