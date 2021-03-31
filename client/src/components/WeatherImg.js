import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

export const WeatherImg = (props) => {
   
    return (
        <div>
            <ReactAnimatedWeather  icon={props.icon}/>
        </div>
    )
}
