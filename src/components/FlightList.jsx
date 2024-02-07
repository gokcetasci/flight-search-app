import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { format } from "date-fns";
import { IoIosArrowForward } from "react-icons/io";
import { RiPlanetFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
const FlightList = ({ searchResults, oneWay }) => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      {searchResults.length > 0 && (
        <div>
          <ul>
            {searchResults.map((flight, index) => (
              <li
                key={index}
                className="bg-white rounded-3xl w-[1200px] mb-3"
                style={{ boxShadow: "0 0 16px #172554" }}
              >
                <div>
                  {!oneWay && flight.returnDate && (
                    <>
                      <div
                        id="roundtripdetails"
                        className="bg-blue-400 py-4 px-12 rounded-t-3xl flex flex-row items-center justify-between"
                        style={{ boxShadow: "0 0 16px #64748b" }}
                      >
                        <div className="flex flex-row items-center justify-center">
                          <FaMapMarkerAlt className="mr-2 fill-teal-400" />
                          <p className="text-gray-200 font-semibold">
                            {flight.details.city}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          {" "}
                          <div className="flex flex-row items-center justify-center space-x-3 mr-5">
                            <div className="flex flex-col items-center">
                              <p
                                id="departureairport"
                                className="text-[24px] font-bold text-indigo-700"
                              >
                                {flight.departureAirport}
                              </p>
                              <p className="text-[14px] text-gray-200">
                                ( {flight.details.departureAirportName} )
                              </p>
                            </div>
                            <FaArrowRightArrowLeft className="fill-indigo-700 mb-4" />
                            <div className="flex flex-col items-center">
                              <p
                                id="arrivalairport"
                                className="text-[24px] font-bold text-indigo-700"
                              >
                                {flight.arrivalAirport}
                              </p>
                              <p className="text-[14px] text-gray-200">
                                ( {flight.details.returnAirportName} )
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row items-center jstify-center text-white">
                          <div className="flex flex-col items-end justify-center text-indigo-800 font-medium">
                            <p>Departure Date:</p>
                            <p> Return Date:</p>
                          </div>
                          <div className="flex flex-col items-center justify-center ml-1 text-blue-800 font-bold">
                            <p>
                              {format(
                                new Date(flight.departureDate),
                                "dd.MM.yyyy"
                              )}
                            </p>
                            <p>
                              {format(
                                new Date(flight.returnDate),
                                "dd.MM.yyyy"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-b p-5 flex items-center justify-around flex-row">
                        <div className="flex flex-row items-center">
                          <RiPlanetFill className="mr-2 fill-indigo-600" />
                          <p className="text-indigo-600 font-medium">
                            {flight.details.airline}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                          <p id="departureairport" className="text-[24px]">
                            {flight.departureAirport}
                          </p>
                          <IoIosArrowForward />
                          <p id="arrivalairport" className="text-[24px]">
                            {flight.arrivalAirport}
                          </p>
                        </div>
                        <div className="flex flex-row space-x-10">
                          <p className="text-[24px] flex items-end">
                            {flight.details.firstDepartureTime}
                          </p>
                          <div className="flex flex-col items-center justify-center">
                            <div>
                              <p className="text-gray-400">
                                {flight.details.firstFlightDuration}
                              </p>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                              <p className="mb-1 font-bold text-blue-700">
                                - - - - - - - -
                              </p>
                              <IoAirplaneSharp className="fill-blue-700 ml-1" />
                            </div>
                          </div>
                          <p className="text-[24px] flex items-end">
                            {flight.details.firstArrivalTime}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                          <IoMdPricetags className="mr-1 fill-teal-500" />
                          <p className="text-[18px] font-semibold">
                            {flight.details.firstPrice}$
                          </p>
                        </div>{" "}
                        <div>
                          <button className="bg-indigo-400 px-4 py-2 rounded-full text-white font-medium hover:bg-indigo-200 hover:scale-105 hover:text-blue-700">
                            Select
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-around p-5">
                        <div className="flex flex-row items-center">
                          <RiPlanetFill className="mr-2 fill-indigo-600" />
                          <p className="text-indigo-600 font-medium">
                            {flight.details.airline}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                          <p id="arrivalairport" className="text-[24px]">
                            {flight.arrivalAirport}
                          </p>
                          <IoIosArrowForward />
                          <p id="departureairport" className="text-[24px]">
                            {flight.departureAirport}
                          </p>
                        </div>
                        <div className="flex flex-row space-x-10">
                          <p className="text-[24px] flex items-end">
                            {flight.details.secondDepartureTime}
                          </p>

                          <div className="flex flex-col items-center justify-center">
                            <div>
                              <p className="text-gray-400">
                                {flight.details.secondFlightDuration}
                              </p>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                              <p className="mb-1 font-bold text-blue-700">
                                - - - - - - - -
                              </p>
                              <IoAirplaneSharp className="fill-blue-700 ml-1" />
                            </div>
                          </div>
                          <p className="text-[24px] flex items-end">
                            {flight.details.secondArrivalTime}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                          <IoMdPricetags className="mr-1 fill-teal-500" />
                          <p className="text-[18px] font-semibold">
                            {flight.details.secondPrice}$
                          </p>
                        </div>
                        <div>
                          <button className="bg-indigo-400 px-4 py-2 rounded-full text-white font-medium hover:bg-indigo-200 hover:scale-105 hover:text-blue-700">
                            Select
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div>
                  {!oneWay && !flight.returnDate && (
                    <>
                      <div
                        id="onewaydetails"
                        className="bg-blue-400 py-4 px-12 rounded-t-3xl flex flex-row items-center justify-between"
                        style={{ boxShadow: "0 0 16px #64748b" }}
                      >
                        <div className="flex flex-row items-center justify-center">
                          <FaMapMarkerAlt className="mr-2 fill-teal-400" />
                          <p className="text-gray-200 font-semibold">
                            {flight.details.city}
                          </p>
                        </div>
                        <div id="onewayairportsname" className="flex flex-row items-center justify-center space-x-3 mr-5">
                            <div className="flex flex-col items-center">
                              <p
                                id="departureairport"
                                className="text-[24px] font-bold text-indigo-700"
                              >
                                {flight.departureAirport}
                              </p>
                              <p className="text-[14px] text-gray-200">
                                ( {flight.details.departureAirportName} )
                              </p>
                            </div>
                            <FaArrowRight className="fill-indigo-700 mb-4" />
                            <div className="flex flex-col items-center">
                              <p
                                id="arrivalairport"
                                className="text-[24px] font-bold text-indigo-700"
                              >
                                {flight.arrivalAirport}
                              </p>
                              <p className="text-[14px] text-gray-200">
                                ( {flight.details.arrivalAirportName} )
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row items-center jstify-center text-white">
                          <div className="flex flex-col items-end justify-center text-indigo-800 font-medium">
                            <p>Departure Date:</p>
                          </div>
                          <div className="flex flex-col items-center justify-center ml-1 text-blue-800 font-bold">
                            <p>
                              {format(
                                new Date(flight.departureDate),
                                "dd.MM.yyyy"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-b p-5 flex items-center justify-around flex-row">
                        <div className="flex flex-row items-center">
                          <RiPlanetFill className="mr-2 fill-indigo-600" />
                          <p className="text-indigo-600 font-medium">
                            {flight.details.airline}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                          <p id="departureairport" className="text-[24px]">
                            {flight.departureAirport}
                          </p>
                          <IoIosArrowForward />
                          <p id="arrivalairport" className="text-[24px]">
                            {flight.arrivalAirport}
                          </p>
                        </div>
                        <div className="flex flex-row space-x-10">
                          <p className="text-[24px] flex items-end">
                            {flight.details.firstDepartureTime}
                          </p>
                          <div className="flex flex-col items-center justify-center">
                            <div>
                              <p className="text-gray-400">
                                {flight.details.firstFlightDuration}
                              </p>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                              <p className="mb-1 font-bold text-blue-700">
                                - - - - - - - -
                              </p>
                              <IoAirplaneSharp className="fill-blue-700 ml-1" />
                            </div>
                          </div>
                          <p className="text-[24px] flex items-end">
                            {flight.details.firstArrivalTime}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                          <IoMdPricetags className="mr-1 fill-teal-500" />
                          <p className="text-[18px] font-semibold">
                            {flight.details.firstPrice}$
                          </p>
                        </div>
                        <div>
                          <button className="bg-indigo-400 px-4 py-2 rounded-full text-white font-medium hover:bg-indigo-200 hover:scale-105 hover:text-blue-700">
                            Select
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightList;
