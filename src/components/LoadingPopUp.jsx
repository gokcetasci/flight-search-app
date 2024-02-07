import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const LoadingPopUp = () => {
  return (
    <div className="loading-popup absolute bottom-44">
      <div className="loading-popup-content">
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default LoadingPopUp;
