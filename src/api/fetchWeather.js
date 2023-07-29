import axios from 'axios';
// import { useState } from 'react';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = process.env.REACT_APP_APIKEY;


export const fetchWeather =  async(query) => {
    
        
        const {data} = await axios.get(URL, {
            params:{
                q: query,
                units: 'metric',
                appid: API_Key,
            }
        });

        
   
    return data;
}