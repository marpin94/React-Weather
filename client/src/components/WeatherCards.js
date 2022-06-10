import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { WeatherImg } from './WeatherImg';

import styles from '../styles/WeatherCard.module.css'



export const WeatherCards = ({temp, city, description, state, country, faren}) => {


    const [weatherKey, setWeatherKey] = useState('')
    
    var temp_f = Math.round((temp * 9/5) +32);
    

    let weatherImgObj = {
        clouds: 'CLOUDY',
        haze: 'CLOUDY',
        clear: 'CLEAR_DAY',
        snow: 'SNOW',
        rain: 'RAIN'
    }

    const renderWeatherImg = () => {
        if(description) {
            setWeatherKey('')
            const keys = Object.keys(weatherImgObj)
            const values = Object.values(weatherImgObj)
            const lower = description.toLowerCase()
            for (let i = 0; i < keys.length; i++){
                if(lower.includes(keys[i])){
                   setWeatherKey(values[i])                  
                }
            }
        }
    }


   useEffect(() => {
        renderWeatherImg();
      
   })



    return (
        <>
            <h2 className='text-center'> Current Weather </h2>
            <hr/>
            <div className='shadow card text-center border border-info'>
            <div className={styles.weatherIcon}> {weatherKey && <WeatherImg icon={weatherKey}/>}  </div> 
                <div className='card-body'>
                    {city && <h2 className='card-title'>{city}{country === 'US'? `,${state}`:''}</h2>}    
                    {country && <h4 className='card-text'>{country}</h4>}
                    {temp && <p className='card-text'>Temperature: {faren? `${temp_f} F`:`${temp} C`}</p>}
                    {description && <p className='card-text'> {description} </p>}  
                </div>
        
            </div>
        </>
    )
}
