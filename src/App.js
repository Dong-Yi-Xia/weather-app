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

  // const search = (evt) => {
  //   if(evt.key === 'Enter'){
  //     fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setQuery('')
  //         setWeather(result)
  //         console.log(result)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }
  // }
  

  const search = async (evt) => {
    if(evt.key === 'Enter'){
      let response = await fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
      let data = await response.json()
      setQuery('')
      setWeather(data)
      console.log(data)
    }
  }

  return (
    <div className="app ">
        <main>
            <div className='search-box'>
                <input 
                  type='text'
                  className='search-bar'
                  placeholder='Search a city name...'
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
            </div>
            {(typeof weather.main != 'undefined') ? (
              <div>     
                <div className='location-box'>
                    <div className='location'>{weather.name}, {weather.sys.country} </div>
                    <div className='date'>{dateBuilder2()}</div>
                </div>
    
                <div className='weather-box'>
                  <div className='temp'> {Math.round(weather.main.temp)}°F </div>
                  <div className='weather'> {weather.weather[0].main} </div>
                </div>
              </div>
            ) : ('City Not Found')}

        </main>
    </div>
  );
}

export default App;
