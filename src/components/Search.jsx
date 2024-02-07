import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Data from "../api/Data.json";
import FlightList from "./FlightList";
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlightLand } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import LoadingPopUp from "./LoadingPopUp";
import { IoMdClose } from "react-icons/io";
import { PiSealWarningBold } from "react-icons/pi";

const Search = () => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneWay, setOneWay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [noResultsPopup, setNoResultsPopup] = useState(false);

  //if flight is exist, show that pop up
  const handleNoResultsPopup = () => {
    setNoResultsPopup(true);
  };

  //popup close button
  const handleCloseNoResultsPopup = () => {
    setNoResultsPopup(false);
  };

  const handleSearch = async () => {
    try {
      setIsSearching(true);
  
      if (
        !departureAirport ||
        !arrivalAirport ||
        !departureDate
      ) {
        alert("Please select all options");
        return;
      }
  
      if (!oneWay && !returnDate) {
        alert("Please select return date for round trip");
        return;
      }
  
      if (!Data || !Data.flights) {
        console.error("Data or Data.flights is undefined");
        return;
      }
  
      //loading
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      const filteredFlights = Data.flights.filter((flight, index) => {
        return (
          flight.departureAirport === departureAirport &&
          flight.arrivalAirport === arrivalAirport &&
          new Date(flight.departureDate) >= departureDate &&
          (oneWay || new Date(flight.returnDate) <= returnDate)
        );
      });
  
      setSearchResults(filteredFlights);
  
      if (filteredFlights.length === 0) { //flight error
        handleNoResultsPopup();
      }

      if (Data.flights.length === 0) { //empty data
        console.warn("Server returned empty data");
      }

    } catch (error) {
      console.error("Error during search:", error);
      if (error.response) {
        console.error("Server responded with error:", error.response.data);
      } else if (error.request) {
        console.error("No response from the server:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    } finally {
      setIsSearching(false);
    }
  };
  

  // react-select options
  const airportOptions = Data.airports.map((airport) => ({
    label: airport.city,
    value: airport.code,
  }));

  return (
    <div id="searchinput" className="w-full h-full flex items-center justify-center flex flex-col">
      <div 
        className={`backdrop-blur-sm bg-[#3b82f6]/50 rounded-3xl flex items-center justify-center ${
          searchResults.length > 0
            ? "w-11/12	 p-5 flex-row space-x-4"
            : "p-20 flex-col space-y-4"
        } `}
        style={{ boxShadow: "0 0 16px #bfdbfe" }}
      >
        <div
          className={`w-full flex flex-row items-center justify-center mb-4 bg-transparent rounded-lg  `}
          style={{ boxShadow: "0 0 16px #bfdbfe" }}
        >
          <button id="roundtripbutton"
            onClick={() => setOneWay(false)}
            className={`flex flex-row items-center justify-center text-white font-medium tracking-wide w-1/2 p-3 rounded-l-lg  ${
              !oneWay ? "bg-sky-500 " : "bg-blue-400/50 "
            } `}
          >
            ROUND TRIP
            <FaArrowRightArrowLeft className="ml-2" />
          </button>
          <button id="onewaybutton"
            onClick={() => {
              setOneWay(true);
              setReturnDate(null);
            }}
            className={`flex flex-row items-center justify-center text-white w-1/2 font-medium tracking-wide p-3 rounded-r-lg ${
              !oneWay ? "bg-blue-400/50 " : "bg-sky-500 "
            }`}
          >
            ONE WAY
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div id="airports"
          className={`flex items-center justify-center w-full  ${
            searchResults.length > 0 ? "flex-col" : "flex-row md:space-x-6"
          }`}
        >
          <div id="departureairportselect" className={`${searchResults.length > 0 ? "mb-2" : ""}`}>
            <div className="flex flex-row items-center">
              <MdFlightTakeoff className="fill-white ml-3 mr-2" />
              <label className="text-white font-semibold">FROM:</label>
            </div>
            <Select
              options={airportOptions}
              value={airportOptions.find(
                (option) => option.value === departureAirport
              )}
              onChange={(selectedOption) =>
                setDepartureAirport(selectedOption.value)
              }
              placeholder="Select Departure Airport"
              styles={{
                control: (provided) => ({
                  ...provided,
                  "@media (min-width: 768px)": {
                    width: "150px",
                  },
                  "@media (min-width: 1024px)": {
                    width: "250px",
                  },
                  backgroundColor: "blue-400/25",
                  borderRadius: "20px",
                  color: "#ffffff",
                  borderWidth: "2px",
                  borderColor: "white",
                  ":hover": {
                    borderColor: "#3b82f6",
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#e2e8f0",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#ffffff",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "#ffffff",
                }),
              }}
            />
          </div>

          <div id="arrivalairportselect" className={`${searchResults.length > 0 ? "" : ""}`}>
            <div className="flex flex-row items-center">
              <MdFlightLand className="fill-white ml-3 mr-2" />
              <label className="text-white font-semibold">TO:</label>
            </div>
            <Select
              options={airportOptions}
              value={airportOptions.find(
                (option) => option.value === arrivalAirport
              )}
              onChange={(selectedOption) =>
                setArrivalAirport(selectedOption.value)
              }
              placeholder="Select Arrival Airport"
              styles={{
                control: (provided) => ({
                  ...provided,
                  "@media (min-width: 768px)": {
                    width: "150px",
                  },
                  "@media (min-width: 1024px)": {
                    width: "250px",
                  },
                  backgroundColor: "blue-400/25",
                  borderRadius: "20px",
                  color: "#ffffff",
                  borderWidth: "2px",
                  borderColor: "white",
                  ":hover": {
                    borderColor: "#3b82f6",
                  },
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#e2e8f0",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#ffffff",
                }),
                input: (provided) => ({
                  ...provided,
                  color: "#ffffff",
                }),
              }}
            />
          </div>
        </div>
        <div id="date"
          className={`w-full flex items-center justify-center  ${
            searchResults.length > 0 ? "flex-col " : "flex-row md:space-x-6"
          }`}
        >
          <div id="departuredate" className={`${searchResults.length > 0 ? "mb-2" : "w-full"}`}>
            <div className="flex flex-row items-center">
              <MdDateRange className="fill-white ml-3 mr-2" />
              <label className="text-white font-semibold">DEPART:</label>
            </div>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="dd-MM-yyyy"
              className="py-1.5 px-3 rounded-full border-[2px] border-white hover:border-[2px] hover:border-blue-700 focus:outline-none bg-blue-400/25 text-white cursor-pointer w-full"
              placeholderText="Select Departure Date"
              wrapperClassName="date-picker-wrapper"
            />
          </div>
          {!oneWay && (
            <div id="returndate">
              <div className="flex flex-row items-center">
                <IoMdCalendar className="fill-white ml-3 mr-2" />
                <label className="text-white font-semibold">RETURN:</label>
              </div>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd-MM-yyyy"
                disabled={oneWay}
                minDate={departureDate}
                className="py-1.5 px-3 rounded-full border-[2px] border-white hover:border-[2px] hover:border-blue-700  bg-blue-400/25 focus:outline-none  text-white cursor-pointer"
                placeholderText="Select Return Date"
                wrapperClassName="date-picker-wrapper"
              />
            </div>
          )}
        </div>
        <div id="searchbutton"
          className={`flex items-center justify-center pt-2 ${
            searchResults.length > 0 ? "w-1/2" : "w-full "
          }`}
        >
          <button
            onClick={handleSearch}
            className="py-3 w-full bg-blue-200 text-blue-700 rounded-full text-[18px] flex flex-row items-center justify-center hover:scale-105 font-semibold transition duration-300 ease-in-out"
            style={{ boxShadow: "0 0 16px #ffffff" }}
          >
            Search
          </button>
        </div>
      </div>

      <div id="flightlist">
        <FlightList searchResults={searchResults} />
      </div>


      {noResultsPopup && (
        <div id="noresultspopup"
          className="no-results-popup bg-indigo-300 p-10 top-32 z-10 absolute rounded-3xl "
          style={{ boxShadow: "0 0 16px #bfdbfe" }}
        >
          <div className="flex justify-end">
            <IoMdClose
              onClick={handleCloseNoResultsPopup}
              className="cursor-pointer  fill-rose-700 mb-6 hover:scale-110 ease-in-out "
            />
          </div>
          <div className="flex flex-row items-center">
            
            <p className="text-[18px] font-bold">
              No flights found for the selected criteria
            </p><PiSealWarningBold className="text-2xl fill-rose-700  ml-3 animate-bounce" />
          </div>
        </div>
      )}
      {isSearching && <LoadingPopUp />}
    </div>
  );
};

export default Search;
