import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherInfoComp from "./components/WeatherInfoComp";

const API_KEY = "6a495b4298b0ef237e90386add97ff49";

const Container = styled.div`
  background-color: lightcoral;
  width: 380px;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 3px 6px #555;
  padding: 20px 10px;
  border: radius 4px;
  margin: 2rem auto;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 2rem auto;
`;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    // console.log(response);
    setWeather(response.data);
    setCity("");
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>

      {weather ? (
        <WeatherInfoComp />
      ) : (
        <CityComponent city={city} updateCity={setCity} fetchData={fetchData} />
      )}

      {/* <WeatherInfoComp /> */}
    </Container>
  );
}

export default App;
