// import React, { useEffect, useState } from 'react';
// import {
//   FaCloud,
//   FaCloudRain,
//   FaCloudShowersHeavy,
//   FaSun,
//   FaSnowflake,
//   FaBolt,
//   FaSmog,
//   FaTint,
//   FaWind,
//   FaSearch,
// } from 'react-icons/fa';
// import { RiLoaderFill } from 'react-icons/ri';
// import { useTranslation } from 'react-i18next';
// import axios from 'axios';
// import TitleAndDescripion from '../components/TitleAndDescripion';

// interface WeatherDataProps {
//   name: string;
//   main: {
//     temp: number;
//     humidity: number;
//   };
//   weather: [
//     {
//       main: string;
//       description: string;
//     }
//   ];
//   sys: {
//     country: string | undefined;
//   };
//   wind: {
//     speed: number;
//   };
// }

// const WeatherCard: React.FC = () => {
//   const api_key = import.meta.env.VITE_API_KEY;
//   const api_endpoint = import.meta.env.VITE_API_ENDPOINT;

//   const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [city, setCity] = useState<string>('');

//   const { t } = useTranslation();

//   const fetchWeatherByLocation = async (lat: number, lon: number) => {
//     const url = `${api_endpoint}/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
//     try {
//       const response = await axios.get(url);
//       console.log('Weather data by location:', response.data); // Лог на данните
//       return response.data;
//     } catch (err) {
//       console.error('Error fetching weather by location:', err);
//       setError(`${t('weatherErrorMessage')}`);
//       setLoading(false);
//     }
//   };

//   const fetchWeatherByCity = async (city: string) => {
//     const url = `${api_endpoint}/weather?q=${city}&appid=${api_key}&units=metric`;
//     try {
//       const response = await axios.get(url);
//       console.log('Weather data by city:', response.data); // Лог на данните
//       return response.data;
//     } catch (err) {
//       console.error('Error fetching weather by city:', err);
//       setError(`${t('weatherErrorMessage')}`);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Enter') {
//         handleSearch();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [city]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         const currentWeather = await fetchWeatherByLocation(
//           latitude,
//           longitude
//         );
//         setWeatherData(currentWeather);
//         setLoading(false);
//       },
//       (error) => {
//         console.error('Geolocation error:', error);
//         setError(`${t('weatherErrorMessage')}`);
//         setLoading(false);
//       }
//     );
//   }, []);

//   const handleSearch = async () => {
//     if (city.trim() === '') {
//       return;
//     }
//     setLoading(true);
//     setError(null); // Изчистване на предишни грешки
//     const cityWeather = await fetchWeatherByCity(city);
//     setWeatherData(cityWeather);
//     setLoading(false);
//   };

//   const handleRetry = () => {
//     setError(null);
//     setLoading(true);
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         const currentWeather = await fetchWeatherByLocation(
//           latitude,
//           longitude
//         );
//         setWeatherData(currentWeather);
//         setLoading(false);
//       },
//       (error) => {
//         console.error('Geolocation error on retry:', error);
//         setError(`${t('weatherErrorMessage')}`);
//         setLoading(false);
//       }
//     );
//   };

//   const getWeatherIcon = (main: string) => {
//     switch (main) {
//       case 'Clouds':
//         return <FaCloud className='text-7xl text-blue-500 mx-auto mt-4' />;
//       case 'Rain':
//         return <FaCloudRain className='text-7xl text-blue-500 mx-auto mt-4' />;
//       case 'Clear':
//         return <FaSun className='text-7xl text-yellow-500 mx-auto mt-4' />;
//       case 'Snow':
//         return <FaSnowflake className='text-7xl text-blue-500 mx-auto mt-4' />;
//       case 'Thunderstorm':
//         return <FaBolt className='text-7xl text-yellow-500 mx-auto mt-4' />;
//       case 'Drizzle':
//         return (
//           <FaCloudShowersHeavy className='text-7xl text-blue-500 mx-auto mt-4' />
//         );
//       case 'Mist':
//       case 'Smoke':
//       case 'Haze':
//       case 'Dust':
//       case 'Fog':
//       case 'Sand':
//       case 'Ash':
//       case 'Squall':
//       case 'Tornado':
//         return <FaSmog className='text-7xl text-gray-500 mx-auto mt-4' />;
//       default:
//         return <FaCloud className='text-7xl text-blue-500 mx-auto mt-4' />;
//     }
//   };

//   console.log('Weather data:', weatherData);

//   if (loading) {
//     return (
//       <div className='flex justify-center items-center min-h-screen bg-slate-200'>
//         <RiLoaderFill className='text-6xl text-blue-500' />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className='flex flex-col justify-center items-center min-h-screen bg-slate-200'>
//         <p className='text-xl text-red-500 mb-4'>{error}</p>
//         <button
//           className='p-2 bg-blue-500 text-white rounded-lg'
//           onClick={handleRetry}
//         >
//           {t('tryAgainButtonWeather')}
//         </button>
//       </div>
//     );
//   }

//   if (!weatherData || !Array.isArray(weatherData.weather)) {
//     console.log('Weather data is missing or malformed.');
//     return (
//       <div className='flex justify-center items-center min-h-screen bg-slate-200'>
//         <p className='text-xl text-gray-500'>Няма налични данни за времето.</p>
//       </div>
//     );
//   }

//   return (
//     <div className='bg-slate-200'>
//       <div>
//         <TitleAndDescripion
//           title={t('weatherTittle')}
//           description={t('telephonesDesc')}
//         />
//       </div>
//       <div className='flex justify-center items-center min-h-screen bg-slate-200'>
//         <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto'>
//           <div className='flex justify-between items-center mb-4'>
//             <input
//               type='text'
//               placeholder={`${t('weatherEnterCity')}`}
//               className='border border-gray-300 rounded-lg p-2 w-full'
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <button
//               className='ml-2 p-2 bg-blue-500 text-white rounded-lg'
//               onClick={handleSearch}
//             >
//               <FaSearch />
//             </button>
//           </div>
//           <div className='text-center'>
//             <h1 className='text-4xl font-bold'>{weatherData.name}</h1>
//             <p className='text-xl text-gray-500'>
//               {weatherData.sys?.country || 'N/A'}
//             </p>
//             {getWeatherIcon(weatherData.weather[0].main)}
//             <p className='text-6xl font-bold mt-4'>
//               {Math.round(weatherData.main.temp)}°C
//             </p>
//             <p className='text-xl text-gray-600'>
//               {weatherData.weather[0].description || 'N/A'}
//             </p>
//             <div className='flex justify-between items-center mt-6'>
//               <div className='flex items-center'>
//                 <FaTint className='text-blue-500' />
//                 <span className='ml-2 text-gray-600'>
//                   {weatherData.main.humidity}% {t('weatherHumidity')}
//                 </span>
//               </div>
//               <div className='flex items-center'>
//                 <FaWind className='text-blue-500' />
//                 <span className='ml-2 text-gray-600'>
//                   {weatherData.wind.speed} {t('weatherWindSpeed')}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;
