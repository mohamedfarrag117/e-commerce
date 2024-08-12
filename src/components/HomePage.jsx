import React from "react";
import ShopItems from "./ShopItems";
import Sale from "./Sale";
import News from "./News";
import Footer from "./Footer";
import Title from "./Title";
import Slide from "./Slide";

const HomePage = () => {
  return (
    <>
      <div>
        <Title />
        <Slide />
        <ShopItems />
        <Sale />
        <News />
      </div>
    </>
  );
};

export default HomePage;
