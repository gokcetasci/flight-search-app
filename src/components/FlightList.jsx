import React from "react";

const FlightList = ({ searchResults }) => {
  return (
    <div>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((flight, index) => (
              <li key={index}>
                {`Departure Airport: ${flight.departureAirport}, Arrival Airport: ${flight.arrivalAirport}, Price: ${flight.details.price}, Duration: ${flight.details.flightDuration}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightList;
