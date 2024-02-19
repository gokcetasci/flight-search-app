import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const LoadingPopUp = () => {
  return (
    <div className="loading-popup absolute ">
      <div className="loading-popup-content">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default LoadingPopUp;
