import React from "react";
import styled from "styled-components";
import WeatherInfo from "./WeatherInfo";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Condition = styled.span`
  margin: 2rem auto;
  font-size: 1.2rem;

  & span {
    font-size: 2rem;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 90%;
  text-align: start;
  margin: 20px 10px 12px 15px;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;

  margin: 6px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const WeatherInfoComp = () => {
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>28 C</span> | Cloudy
        </Condition>
        <WeatherLogo src="/icons/perfect-day.svg"></WeatherLogo>
      </WeatherCondition>
      <Location>Bengaluru</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfo name={WeatherInfoIcons["sunrise"]} value="2332" />
        <WeatherInfo name={WeatherInfoIcons["humidity"]} value="30" />
        <WeatherInfo name={WeatherInfoIcons["wind"]} value="14" />
        <WeatherInfo name={WeatherInfoIcons["pressure"]} value="132" />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfoComp;
