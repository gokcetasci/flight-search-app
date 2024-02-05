import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <label>Kalkış Havaalanı:</label>
      <select
        value={departureAirport}
        onChange={(e) => setDepartureAirport(e.target.value)}
      >
        <option value="">Select Departure Airport</option>
        {Data.airports.map((airport) => (
          <option key={airport.code} value={airport.code}>
            {airport.city}
          </option>
        ))}
      </select>

      <label>Varış Havaalanı:</label>
      <select
        value={arrivalAirport}
        onChange={(e) => setArrivalAirport(e.target.value)}
      >
        <option value="">Select Arrival Airport</option>
        {Data.airports.map((airport) => (
          <option key={airport.code} value={airport.code}>
            {airport.city}
          </option>
        ))}
      </select>

      <label>Kalkış Tarihi:</label>
      <DatePicker
        selected={departureDate}
        onChange={(date) => setDepartureDate(date)}
        dateFormat="dd-MM-yyyy"
      />

      <label>Dönüş Tarihi:</label>
      <DatePicker
        selected={returnDate}
        onChange={(date) => setReturnDate(date)}
        dateFormat="dd-MM-yyyy"
        disabled={oneWay}
      />

      <label>Tek Yönlü Uçuş:</label>
      <input
        type="checkbox"
        checked={oneWay}
        onChange={(e) => setOneWay(e.target.checked)}
      />

      <button onClick={handleSearch}>Search</button>

        <FlightList searchResults={searchResults}/>
    </div>
  );
};

export default Search;
