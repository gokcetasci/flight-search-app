import React from "react";
import { GiRingedPlanet } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className=" w-screen h-[280px] bg-[#18163e]">
      <div className="w-screen h-[200px] flex flex-col md:flex-row items-center justify-evenly md:justify-between px-24 pt-6 ">
        <div className="flex flex-row items-center justify-center">
          <GiRingedPlanet className="w-10 h-10 fill-cyan-400" />
          <span className="font-bold italic text-[#18163e] text-cyan-500 text-[32px]">
            F<span className="text-[26px]">LIGHT</span>
          </span>
        </div>
        <div className="pt-6 hidden md:flex">
          <div className="flex flex-col justify-center text-indigo-800 font-bold space-y-2  text-[14px] tracking-wide ">
            <h1 className="text-[18px] text-blue-400">Contact</h1>
            <a href="/" className="hover:text-blue-600">
              Help/FAQ
            </a>
            <a href="/" className="hover:text-blue-600">
              Press
            </a>
            <a href="/" className="hover:text-blue-600">
              Affiliates
            </a>
            <a href="/" className="hover:text-blue-600">
              Asvertise with us
            </a>
          </div>
        </div>
        <div className="pt-6 hidden md:flex">
          <div className="flex flex-col justify-center text-indigo-800 font-bold space-y-2  text-[14px] tracking-wide ">
            <h1 className="text-[18px] text-blue-400">Company</h1>
            <a href="/" className="hover:text-blue-600">
              About Us{" "}
            </a>
            <a href="/" className="hover:text-blue-600">
              Careers{" "}
            </a>
            <a href="/" className="hover:text-blue-600">
              Discover{" "}
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row ml-auto  gap-[24px] items-center ">
            <a
              href="/"
              className="bg-cyan-600 w-[30px] h-[30px] rounded-full  text-[#18163e] flex items-center justify-center hover:scale-105 hover:bg-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="bg-cyan-600 w-[30px] h-[30px] rounded-full  text-[#18163e] flex items-center justify-center hover:scale-105 hover:bg-blue-600"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="bg-cyan-600 w-[30px] h-[30px] rounded-full  text-[#18163e] flex items-center justify-center hover:scale-105 hover:bg-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="bg-cyan-600 w-[30px] h-[30px] rounded-full  text-[#18163e] flex items-center justify-center hover:scale-105 hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-blue-600 font-bold py-6">
        <p className="text-[14px]">© 2024 FLIGHTS. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
