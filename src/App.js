import React, {useState} from 'react';
import './App.css';
import { fetchWeather } from './api/fetchWeather';

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [badQuery, setBadQuery] = useState(false);
  const search = async(e) => {
    if(e.key === "Enter"){
      try {
        const data = await fetchWeather(query);
      
        setWeather(data);
        
        setQuery("");
        setBadQuery(false);
      } catch (error) {
        
        setBadQuery(true);
        setQuery("");
      }
    }
  }

  if(badQuery=== true){
    
    return(
      <div className="main-container">
      <input 
      type="text" 
      className='search' 
      placeholder='Search..'
      value={query} 
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={search} />
       <div className="city">
          <h2 className="city-name">
            <span>No City Found!!</span>
          </h2>
       </div>
       
        
      </div>
      
    )
  }
  return (
    <div className="main-container">
      <input 
      type="text" 
      className='search' 
      placeholder='Search..'
      value={query} 
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={search} />
      
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)} 
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="city-icon" />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
