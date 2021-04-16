import WeatherActionTypes from './weather.types'

export const getWeatherAPI = (data) => ({
    type: WeatherActionTypes.GET_WEATHER_API,
    payload: data
})