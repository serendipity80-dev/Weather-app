import React from 'react'
import './description.css'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy} from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'


const Descriptions = ({weather, units}) => {

    const tempUnits = units === 'metric' ? '°C' : '°F'
    const windUnits = units === 'metric' ? 'm/s' : 'm/h'


  return (
    <div className='section section__description'>
        <div className='card'>
            <div className='description__cardIcon'>
                <FaArrowDown />
                <h6>min</h6>
            </div>
            <h2>{weather.temp_min.toFixed()}{tempUnits}</h2>
        </div>

        <div className='card'>
            <div className='description__cardIcon'>
                <FaArrowUp />
                <h6>max</h6>
            </div>
            <h2>{weather.temp_max.toFixed()} {tempUnits} </h2>
        </div>

        <div className='card'>
            <div className='description__cardIcon'>
                <BiHappy />
                <h6>feels like</h6>
            </div>
            <h2> {weather.feels_like.toFixed()}{tempUnits} </h2>
        </div>

        <div className='card'>
            <div className='description__cardIcon'>
                <MdCompress />
                <h6>pressure</h6>
            </div>
            <h2> {weather.pressure}hPa</h2>
        </div>

        <div className='card'>
            <div className='description__cardIcon'>
                <MdOutlineWaterDrop />
                <h6>humidity</h6>
            </div>
            <h2> {weather.humidity}</h2>
        </div>

        <div className='card'>
            <div className='description__cardIcon'>
                <FaWind/>
                <h6>Wind</h6>
            </div>
            <h2> {weather.speed} {windUnits}</h2>
        </div>
    </div>
  )
}

export default Descriptions