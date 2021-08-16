// import { Dropdown } from 'bootstrap'
import React, { useEffect, useState } from 'react'


import { WeatherCards } from './WeatherCards'


export const SearchBar = ({faren}) => {

    const [city, setCity] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [load, setLoad] = useState(false)
    const [option, setOption] = useState('Current Weather')




    const key = process.env.REACT_APP_API_KEY

   

 

    async function handleSubmit(e){
        e.preventDefault()

        if(city === '') {
            return(
                alert('Please enter a city')
            )
        } else {
        const apiData = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`)
        .then(res => res.json())
        .then(data => data)
    
                
        .catch(error => {
          console.log(error)
        })



        if (apiData == undefined) {
            setCity('')
            return(
                alert('City Not Found, Please Try Again')
            )
            
        } else { 
            setSearchResults({
                data:apiData.data[0],
                temp:apiData.data[0].temp,
                city:apiData.data[0].city_name,
                description: apiData.data[0].weather.description,
                state: apiData.data[0].state_code,
                country: apiData.data[0].country_code               
            })


        }
            setLoad(true)
            setCity('')
        }
    }




    return (
    <div className='shadow-sm d-flex flex-column justify-content-center  m-5'>

        <form className='form-group'>
            <input className='form-control form-control-lg'type='text' placeholder='Enter City Name...' value={city} onChange={(e)=>setCity(e.target.value) } />
            <button className='btn btn-primary btn-block'onClick = {handleSubmit}>Search</button> 

        </form>
        <div className=''>
            {load && <WeatherCards 
            temp={searchResults.temp} 
            city={searchResults.city} 
            description={searchResults.description}
            state = {searchResults.state} 
            country = {searchResults.country}
            faren={faren} />}
            
            <br/>


            
        </div>
    </div>
    )
}
