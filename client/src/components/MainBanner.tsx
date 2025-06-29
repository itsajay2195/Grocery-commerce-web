import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <div className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-8">
      {/* Responsive Banner Images */}
      <img
        src={assets.main_banner_bg}
        alt=""
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt=""
        className="w-full block md:hidden"
      />

      {/* Banner Text + Buttons */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-16 lg:pl-44">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-[18rem] md:max-w-[20rem] lg:max-w-[26rem] leading-tight lg:leading-[4rem]">
          Freshness you can trust, savings you will love!!!
        </h1>

        <div className="flex mt-6 items-center font-medium">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              className="md:hidden transition group-focus:translate-x-1"
              alt="arrow"
            />
          </Link>

          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore details
            <img
              src={assets.black_arrow_icon}
              className="transition group-hover:translate-x-1"
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
