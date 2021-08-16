import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { WeatherImg } from './WeatherImg';



export const WeatherCards = ({temp, city, description, state, country, faren}) => {


    const [weatherKey, setWeatherKey] = useState('')
    
    var temp_f = Math.round((temp * 9/5) +32);
    

    let weatherImgObj = {
        clouds: 'CLOUDY',
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
        <br/>
        <div className=' shadow card text-center text-primary border border-info'>

        <div className = 'card-img d-flex align-self-start mr-3'> {weatherKey && <WeatherImg icon={weatherKey}/>}  </div>
            
            <div className='card-img-overlay'>
                {city && <h2>{city}{country =='US'? `,${state}`:''}</h2>} 
                  
            </div>

            <div className='card-text'>
                {country && country=='US'? '':<h2 className='card-header'>{country}</h2>}
                {temp && <h4>Temperature: {faren? `${temp_f} F`:`${temp} C`}</h4>}
                {description && <p> {description} </p>}
               
            </div>
    
        </div>
        </>
    )
}
