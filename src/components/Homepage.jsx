import React from "react";
import Search from "./Search";
import img1 from "../images/img1.jpg"
function Homepage() {
  return (
    <div  className="homepage-container items-center justify-center relative bg-[#18163e] "
    style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
    }}>
      <div className="flex items-center justify-center p-20">
        <Search />
      </div>
      
    </div>
  );
}

export default Homepage;