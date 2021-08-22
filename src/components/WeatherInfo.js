import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  margin: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoLabel = styled.span`
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  & span {
    font-size: 0.7rem;
    text-transform: capitalize;
  }
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const WeatherInfo = (props) => {
  const { name, value } = props;
  return (
    <>
      <InfoContainer>
        <InfoIcon src={name} />
        <InfoLabel>
          {value}
          <span>Sunny</span>
        </InfoLabel>
      </InfoContainer>
    </>
  );
};

export default WeatherInfo;
