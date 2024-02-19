import React from "react";
import Search from "./Search";
import img1 from "../images/img1.jpg";
import Footer from "./Footer";
import { GiRingedPlanet } from "react-icons/gi";

function Homepage() {
  return (
    <div className="homepage-container items-center justify-center relative w-full h-screen">
      <div className="flex flex-row items-center justify-center absolute top-4 left-10">
          <GiRingedPlanet className="w-10 h-10 fill-cyan-400" />
          <span className="font-bold italic text-[#18163e] text-cyan-500 text-[32px]">
            F<span className="text-[26px]">LIGHT</span>
          </span>
        </div>
      <div
        className="flex items-center justify-center p-20 "
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
        }}
      >
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
