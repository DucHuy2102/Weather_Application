const Weather = (props) => {
    // console.log('weatherData -->', props.weatherData);

    return (
        <div>
            {props.weatherData.weather ? (
                <div className='bg-gray-300 shadow-lg w-[500px] h-[250px] rounded-xl m-auto relative px-6 top-[10%]'>
                    <div className='flex justify-between w-full'>
                        {/* left */}
                        <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
                            <div className='flex flex-col items-start justify-between h-full'>
                                {/* country name & description */}
                                <div>
                                    <p className='text-xl'>
                                        {props.weatherData.name},{props.weatherData.sys.country}
                                    </p>
                                    <p className='text-sm'>{props.weatherData.weather[0].description}</p>
                                </div>

                                {/* temp */}
                                <div>
                                    <h1 className='bg-gray-200 rounded-2xl p-3 text-6xl font-semibold'>
                                        {props.weatherData.main.temp.toFixed()}°C
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className='w-1/2 flex flex-col justify-between items-end'>
                            {/* get icon weather */}
                            <div className='relative animate-icon'>
                                <img
                                    src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
                                    alt='Icon Weather'
                                    className='w-[120px]'
                                />
                            </div>

                            {/* more info */}
                            {props.weatherData.name !== undefined ? (
                                <div className='flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs'>
                                    {/* feel like */}
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Feels Like</p>
                                        <p className='w-20 font-bold'>
                                            {props.weatherData.main.feels_like.toFixed()}°C
                                        </p>
                                    </div>

                                    {/* humidity */}
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Humidity</p>
                                        <p className='w-20 font-bold'>{props.weatherData.main.humidity}%</p>
                                    </div>

                                    {/* wind */}
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Wind Speed</p>
                                        <p className='w-20 font-bold'>{props.weatherData.wind.speed.toFixed()} KPH</p>
                                    </div>

                                    {/* pressure */}
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Pressure</p>
                                        <p className='w-20 font-bold'>{props.weatherData.main.pressure} hPa</p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Weather;
