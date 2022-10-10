
 const API_KEY = 'dead079629d45cf0f7283520b61dd1d8';
 
 const iconUrl = (iconId) => 
    `https://openweathermap.org/img/wn/${iconId}@2x.png`


const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res)=> res.json())
    .then((data)=> data);

const {weather,
       main:{feels_like, temp, temp_max, temp_min, humidity,pressure}, 
       sys:{country},
       wind:{speed},
       name,
    } = data
    const { description, icon } = weather[0]

    return {
    description, 
    iconURL: iconUrl (icon), 
    feels_like,
     temp, 
     temp_max, 
     temp_min, 
     pressure,
     humidity,
     country, 
     speed,
     name,
    }
}


export { getFormattedWeatherData }