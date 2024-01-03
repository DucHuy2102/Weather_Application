import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';
import InfoApp from './components/InfoApp';

function App() {
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState('');

    // API
    const API_KEY = 'cf7a36577c27525b0dbb0704523cde66';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    // function
    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            axios.get(API_URL).then((res) => {
                // console.log('API -> ', res.data);
                setWeather(res.data);
            });
            setLocation('');
        }
    };

    const deleteWeather = () => {
        setWeather({});
    };

    return (
        <div className='h-full w-full relative flex flex-col justify-center items-center mt-10'>
            {/* search */}
            <div className='p-4'>
                <input
                    type='text'
                    className='px-6 py-3 rounded-3xl w-[700px] text-gray-600 placeholder:text-gray-400 text-lg border border-gray-300 focus:outline-none bg-white-600/100 shadow-md'
                    placeholder='Enter location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDownCapture={searchLocation}
                />

                {/* button clear */}
                <button
                    className='px-6 py-3 border rounded-3xl ml-5 hover:text-white hover:bg-gray-500'
                    onClick={deleteWeather}
                >
                    Clear
                </button>
            </div>

            {/* display weather */}
            {typeof weather.main === 'undefined' ? <InfoApp /> : <Weather weatherData={weather} />}
        </div>
    );
}

export default App;
