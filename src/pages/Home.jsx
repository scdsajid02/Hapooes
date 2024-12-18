import React from "react";
import Banner from "./inner/banner";
import Latestcollecion from "./inner/Latestcollecion";
import Bestseller from "./inner/Bestseller";
import Policies from "./inner/Policies";
import Newsteller from "./inner/Newsteller";
import Search from "./inner/Search";

const Home = () => {
  return (
    <div>
      <Banner />
      <Latestcollecion />
      <Bestseller />
      <Policies />
      <Newsteller />
    </div>
  );
};

export default Home;
