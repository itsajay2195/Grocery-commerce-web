import React from "react";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt=""
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt=""
        className="w-full hidden md:hidden"
      />
    </div>
  );
};

export default MainBanner;
