import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Forecast = ({data, faren}) => {

    const C_F = (temp) => {
        return(
            Math.round((temp*9/5)+32)
        )
    }

    return (
    <>
        <h2 className='text-center '> Forecast </h2>
        <br/>
        <div className = 'd-flex flex-row '>

                {data.data.map(x => 
                    <div className='shadow card text-center text-primary border border-info flex-fill' >
                        <div className='card-title'>{x.datetime}</div>
                        <div className ='card-text'>
                            High:  {faren? `${C_F(x.max_temp)} F`:`${x.max_temp} C`} <br/>
                            Low:   {faren? `${C_F(x.min_temp)} F`:`${x.min_temp} C`}<br/>
                            {x.weather.description}                           
                        </div>
                    </div>)}

        </div>
    </>
    )
}
