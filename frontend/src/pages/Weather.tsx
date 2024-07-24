import React, { useEffect, useState } from 'react';
import {
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSun,
  FaCloudMoon,
  FaSun,
  FaMoon,
  FaSnowflake,
  FaBolt,
  FaSmog,
  FaTint,
  FaWind,
  FaSearch,
} from 'react-icons/fa';
import { RiLoaderFill } from 'react-icons/ri';
import axios from 'axios';

const WeatherCard: React.FC = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const api_endpoint = import.meta.env.VITE_API_ENDPOINT;

  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchCurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          console.log(currentWeather);
        }
      );
    });
  });
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-200'>
      <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto'>
        <div className='flex justify-between items-center mb-4'>
          <input
            type='text'
            placeholder='Enter a City'
            className='border border-gray-300 rounded-lg p-2 w-full'
          />
          <button className='ml-2 p-2 bg-blue-500 text-white rounded-lg'>
            <FaSearch />
          </button>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>WIRI</h1>
          <p className='text-xl text-gray-500'>NZ</p>
          <FaCloud className='text-7xl text-blue-500 mx-auto mt-4' />
          <p className='text-6xl font-bold mt-4'>13°C</p>
          <p className='text-xl text-gray-600'>Clouds</p>
          <div className='flex justify-between items-center mt-6'>
            <div className='flex items-center'>
              <FaTint className='text-blue-500' />
              <span className='ml-2 text-gray-600'>64% Humidity</span>
            </div>
            <div className='flex items-center'>
              <FaWind className='text-blue-500' />
              <span className='ml-2 text-gray-600'>2.57 km/h Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
