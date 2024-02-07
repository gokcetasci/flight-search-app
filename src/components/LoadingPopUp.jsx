import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const LoadingPopUp = () => {
  return (
    <div className="loading-popup">
      <div className="loading-popup-content">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default LoadingPopUp;
