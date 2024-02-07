import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { format } from "date-fns";

const FlightList = ({ searchResults, oneWay }) => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      {searchResults.length > 0 && (
        <div>
          <ul>
            {searchResults.map((flight, index) => (
              <li
                key={index}
                className="bg-white rounded-3xl w-[1200px]"
                style={{ boxShadow: "0 0 16px #172554" }}
              >
                <div>
                  {!oneWay && flight.returnDate && (
                    <>
                      <div
                        id="roundtripdetails"
                        className="bg-blue-400 p-4 rounded-t-3xl flex flex-row items-center justify-between"
                        style={{ boxShadow: "0 0 16px #64748b" }}
                      >
                        <div className="flex flex-row items-center justify-center space-x-3 mr-5">
                          <p id="departureairport" className="text-[24px]">
                            {flight.departureAirport}
                          </p>
                          <FaArrowRightArrowLeft className="" />
                          <p id="arrivalairport" className="text-[24px]">
                            {flight.arrivalAirport}
                          </p>
                        </div>
                        <div className="flex flex-row space-x-4">
                          <p>
                            Departure Date:{" "}
                            {format(
                              new Date(flight.departureDate),
                              "dd.MM.yyyy"
                            )}
                          </p>
                          <p>
                            Return Date:{" "}
                            {format(new Date(flight.returnDate), "dd.MM.yyyy")}
                          </p>
                        </div>
                      </div>

                      <div className="border-b p-5 flex items-center justify-around flex-row">
                        <div className="flex flex-row items-center justify-center gap-4">
                          <p id="departureairport" className="text-[24px]">
                            {flight.departureAirport}
                          </p>
                          <FaArrowRightArrowLeft className="" />
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
                          <IoMdPricetags className="mr-2" />
                          <p className="text-[18px] font-semibold">
                            {flight.details.firstPrice}$
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-around p-5">
                        <div className="flex flex-row items-center justify-center gap-4">
                          <p id="arrivalairport" className="text-[24px]">
                            {flight.arrivalAirport}
                          </p>
                          <FaArrowRightArrowLeft className="" />
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
                          <IoMdPricetags className="mr-2" />
                          <p className="text-[18px] font-semibold">
                            {flight.details.secondPrice}$
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div>
                  {!oneWay && !flight.returnDate && (
                    <>
                      <div
                        className="bg-blue-400 p-4 rounded-t-3xl flex flex-row items-center justify-between"
                        style={{ boxShadow: "0 0 16px #64748b" }}
                      >
                        <p id="departureairport" className="">
                          {flight.departureAirport}
                        </p>
                        <FaArrowRight />
                        <p id="arrivalairport">{flight.arrivalAirport}</p>
                      </div>
                      <p>
                        Departure Date:{" "}
                        {format(new Date(flight.departureDate), "dd.MM.yyyy")}
                      </p>
                      <p>Departure Time: {flight.details.firstDepartureTime}</p>
                      <p>Arrival Time: {flight.details.firstArrivalTime}</p>

                      <p>
                        Flight Duration: {flight.details.firstFlightDuration}
                      </p>
                      <p>Price: {flight.details.firstPrice}</p>
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
