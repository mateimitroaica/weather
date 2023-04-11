import React from "react";
import { useProvider } from "../hooks/useProvider";

const Card = () => {
  const { data } = useProvider();
  return (
    <div className="container">
      <div className="name">
        <h2>{data.name}</h2>
      </div>

      <div className="weather-box">
        {data.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="ceva"
          />
        )}
        {data.main && (
          <p className="temperature">{Math.floor(data.main.temp - 273.15)}°C</p>
        )}
        {data.weather && (
          <p className="description">{data.weather[0].description}</p>
        )}
      </div>

      <div className="weather-details">
        <div className="humidity">
          <i className="fa-solid fa-water"></i>
          <div className="text">
            {data.main && <span>{data.main.humidity}%</span>}
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind">
          <i className="fa-solid fa-wind"></i>
          <div className="text">
            {data.wind && <span>Wind {data.wind.speed}m/s</span>}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
