import React from "react";

const FlightList = ({ searchResults, oneWay }) => {
  return (
    <div>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((flight, index) => (
              <li key={index}>
                <p>Departure Airport: {flight.departureAirport}</p>
                <p>Arrival Airport: {flight.arrivalAirport}</p>
                {!oneWay && flight.returnDate && (
                  <>
                    <p>Departure Date: {flight.departureDate}, Return Date: {flight.returnDate}</p>
                    <p>Departure Time 1: {flight.details.firstDepartureTime}</p>
                    <p>Arrival Time 1: {flight.details.firstArrivalTime}</p>
                    <p>Flight Duration 1: {flight.details.firstFlightDuration}</p>
                    <p>Price 1: {flight.details.firstPrice}</p>
                    <p>Departure Time 2: {flight.details.secondDepartureTime}</p>
                    <p>Arrival Time 2: {flight.details.secondArrivalTime}</p>
                    <p>Flight Duration 2: {flight.details.secondFlightDuration}</p>
                    <p>Price 2: {flight.details.secondPrice}</p>
                  </>
                )}
                {!oneWay && !flight.returnDate && (
                  <>
                    <p>Departure Date: {flight.departureDate}</p>
                    <p>Departure Time: {flight.details.firstDepartureTime}</p>
                    <p>Arrival Time: {flight.details.firstArrivalTime}</p>
                    <p>Flight Duration: {flight.details.firstFlightDuration}</p>
                    <p>Price: {flight.details.firstPrice}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightList;
