"use client";
import Caro from "@/components/Caro";
import Points from "@/components/Points";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <div className="bg-white w-full ">
      <div className="w-full md:flex justify-center items-center absolute top-[-5px] z-10 hidden">
        <Caro />
      </div>
      <div className="pt-[180px]">
        <Services />
      </div>
      <div className="pb-[80px]">
        <Portfolio />
      </div>
      <div>
        <Points
          title="We Are Providing Best Business Service"
          describe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          call="contact us"
        />
      </div>
    </div>
  );
};

export default Home;
