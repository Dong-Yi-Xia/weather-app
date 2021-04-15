// require('dotenv').config()
import './App.css';
import React, { useEffect, useState } from 'react'
import {dateBuilder2} from './components/date'

const api = {
  key: process.env.REACT_APP_WEATHER,
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})


  // useEffect( async() => {
  //   let response = await fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
  //   let data = await response.json()
  //   setQuery('')
  //   setWeather(data)
  // }, [])

  

  const search = async (evt) => {
    if(evt.key === 'Enter'){
      let response = await fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
      let data = await response.json()
      setQuery('')
      setWeather(data)
      console.log(data)
    }
  }

  const weatherType = () => {
    if(weather.main){
      let temp = weather.main.temp
      switch(true){
        case (temp <= 45):
          return 'app cold'
        case (temp > 45 && temp < 80):
          return 'app warm'
        case (temp >= 80):
          return 'app hot'  
      }
    }
    return 'app'
  }

  return (
    <div className={weatherType()}>
        <main>
            <div className='search-box'>
                <input 
                  type='text'
                  className='search-bar'
                  placeholder='Search a city name, state, country......'
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
            </div>
            {(typeof weather.main != 'undefined') ? 
            (<div>     
                <div className='location-box'>
                    <div className='location'>{weather.name}, {weather.sys.country} </div>
                    <div className='date'>{dateBuilder2()}</div>
                </div>
    
                <div className='weather-box'>
                  <div className='temp'> {Math.round(weather.main.temp)}°F </div>
                  <div className='weather'> {weather.weather[0].main} </div>
                </div>
            </div>) : 
            ('CITY NOT FOUND')}

        </main>
    </div>
  );
}

export default App;
