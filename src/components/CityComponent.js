import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 2rem auto;
`;

const CityLabel = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: black;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid #333;
  /* border-radius: 0.6rem; */
  color: black;
  margin: 2rem auto;

  & input {
    padding: 0.6rem 0.8rem;
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-family: Montserrat;
    font-weight: bold;
  }

  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

const CityComponent = ({ city, updateCity, fetchData }) => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <CityLabel>Choose City</CityLabel>
      <SearchBox onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
