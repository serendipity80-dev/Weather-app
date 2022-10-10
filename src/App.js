import { useEffect, useState } from 'react';
import warmBg from './assets/warm.jpg';
import coldBg from './assets/winter.jpg';
import { getFormattedWeatherData } from './WeatherService';
import './App.css';
import Descriptions from './components/Descriptions';

function App() {

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Belgrade")
  const [units, setUnits] = useState('metric')
  const [bg, setBg] = useState(coldBg)

useEffect(() => {

  const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData(city, units)
    setWeather(data)
    

    const dynamicBg = units === 'metric' ? 20 :60;
    if(data.temp <= dynamicBg) setBg(coldBg)
    else setBg(warmBg)
  };
    fetchWeatherData()
   }, [units, city])
  

   const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === 'C'
    button.innerText = isCelsius ? '°F' : '°C'
    setUnits(isCelsius ? 'metric': 'imperial')
   }

   const keyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur()
    }
   };

  return (
    <div className="app" style={{backgroundImage:`url(${bg})`}}>
  
   <div className="overlay">
    {
      weather && (
   
    <div className="container">
      <div className="section section__inputs">
        <input type="text" name="city" onKeyDown={keyPressed} placeholder="Enter City..."/>
        <button onClick={(e) => handleUnitsClick(e)}> °F</button>
      </div>
      <div className="section section__temperature">
        <div className="desc">
          {`${weather.name}, ${weather.country}`}
          <img src={weather.iconURL} alt="weatherIcon" />
         <h3> {`${weather.description}`}</h3>
        </div>
        <div className="temperature">
          <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C': 'F'}`}</h1>
        </div>
      </div>
      <Descriptions weather={weather} units={units}/>
    </div>

      )
    }
   </div>
    </div>
  );
}

export default App;
