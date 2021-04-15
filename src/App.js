// require('dotenv').config()
import './App.css';
import React from 'react'
import {dateBuilder2} from './components/date'

const api = {
  key: process.env.REACT_APP_WEATHER,
  base: 'api.openweathermap.org/data/2.5/'
}

function App() {

  return (
    <div className="app ">
        <main>
            <div className='search-box'>
                <input 
                  type='text'
                  className='search-bar'
                  placeholder='Search.....'
                />
            </div>

            <div className='location-box'>
                <div className='location'>New York City, US</div>
                <div className='date'>{dateBuilder2()}</div>
            </div>

        </main>
    </div>
  );
}

export default App;
