import React from 'react'
import "./WeatherApp.css"

import search_icon from '../Assets/search.png'
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

const WeatherApp = () => {

  let api_key = "ac4c316660f753996f55df564f00f2e9"

 /* const search = async ()=>{
      const element = document.getElementsByClassName("cityInput")
      if(element[0].value === ""){
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

     let res = await fetch(url);
     let data = res.json()
     const humidity = document.getElementsByClassName("humidity-percent")
     const wind = document.getElementsByClassName("wind-rate")
     const temp = document.getElementsByClassName("weather-temp")
     const location = document.getElementsByClassName("weather-location")

     humidity[0].innerHTML = data.main.humidity;
     wind[0].innerHTML = data.wind.speed;
     temp[0].innerHTML = data.main.temp;
     location[0].innerHTML = data.name;

  }*/

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
  
        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temp[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
      } else {
        console.error("Erreur lors de la récupération des données météo.");
      }
    } catch (error) {
      console.error("Une erreur est survenue lors de la récupération des données : " + error);
    }
  };
  

  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className='cityInput' placeholder='Rechercher' />
          <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} className='icon' alt="" />
          <div className="data">
            <div className="humidity-percent">
              64%
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} className='icon' alt="" />
          <div className="data">
            <div className="wind-rate">
              18km/h
            </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WeatherApp
