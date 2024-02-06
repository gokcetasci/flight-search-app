import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Data from "../api/Data.json";
import FlightList from "./FlightList";

const Search = () => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneWay, setOneWay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!Data || !Data.flights) {
      console.error("Data or Data.flights is undefined");
      return;
    }

    const filteredFlights = Data.flights.filter((flight, index) => {
      return (
        flight.departureAirport === departureAirport &&
        flight.arrivalAirport === arrivalAirport &&
        new Date(flight.departureDate) >= departureDate &&
        (oneWay || new Date(flight.returnDate) <= returnDate)
      );
    });

    setSearchResults(filteredFlights);
  };

  // react-select options
  const airportOptions = Data.airports.map((airport) => ({
    label: airport.city,
    value: airport.code,
  }));

  return (
    <div className="container flex items-center">
      <div>
        <label>From:</label>
        <Select
          options={airportOptions}
          value={airportOptions.find((option) => option.value === departureAirport)}
          onChange={(selectedOption) => setDepartureAirport(selectedOption.value)}
          placeholder="Select Departure Airport"
        />
      </div>

      <div>
        <label>To:</label>
        <Select
          options={airportOptions}
          value={airportOptions.find((option) => option.value === arrivalAirport)}
          onChange={(selectedOption) => setArrivalAirport(selectedOption.value)}
          placeholder="Select Arrival Airport"
        />
      </div>

      <div>
        <label>DEPART:</label>
        <DatePicker
          selected={departureDate}
          onChange={(date) => setDepartureDate(date)}
          dateFormat="dd-MM-yyyy"
        />

        <label>RETURN:</label>
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          dateFormat="dd-MM-yyyy"
          disabled={oneWay}
          minDate={departureDate}
        />
      </div>

      <div>
        <label>One Way:</label>
        <input
          type="checkbox"
          checked={oneWay}
          onChange={(e) => setOneWay(e.target.checked)}
        />
      </div>

      <div>
        <button onClick={handleSearch}>Search</button>
      </div>

      <FlightList searchResults={searchResults} />
    </div>
  );
};

export default Search;
