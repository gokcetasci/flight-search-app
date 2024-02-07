import React from "react";
import Search from "./Search";
import img1 from "../images/img1.jpg"
import Footer from "./Footer";

function Homepage() {
  return (
    <div  className="homepage-container items-center justify-center relative bg-blue-600 w-full h-screen"
    style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y", // Yatay eksende tekrarlama

    }}>
      
      <div className="flex items-center justify-center p-20 ">
        <Search />
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;