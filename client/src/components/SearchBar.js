// import { Dropdown } from 'bootstrap'
import React, { useState } from 'react'
import { WeatherCards } from './WeatherCards'

import styles from '../styles/SearchBar.module.css'


export const SearchBar = ({faren}) => {

    const [city, setCity] = useState('')

    const [searchResults, setSearchResults] = useState([])
    const [load, setLoad] = useState(false)
    
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

        if (apiData === undefined) {
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
    <div className={styles.container}>
        <form autoComplete='off'>
            <div className='form-group'>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Enter Search Terms...' 
                    id='cityInput' 
                    value={city} 
                    onChange={(e)=>setCity(e.target.value) } 
                    />
                <small id="passwordHelpBlock" class="form-text text-muted">
                For best results enter City,State,Country e.g. Seattle, WA, USA
                </small>
            </div>
            <button className={styles.searchBtn} onClick = {handleSubmit}>Search</button> 
        </form>
        <div>
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
