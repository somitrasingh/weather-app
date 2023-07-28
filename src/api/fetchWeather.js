import axios from 'axios';
// import { useState } from 'react';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "090c76dff0bb79e6e4a2d82d21e28d8e";


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