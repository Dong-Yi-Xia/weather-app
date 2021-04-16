import WeatherAtionTypes from './weather.types'

const INITIAL_STATE = {
    weatherAPI: {},
    queryName: ''
}

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case WeatherAtionTypes.GET_WEATHER_API:
            return {
                ...state,
                weatherAPI: action.payload
            }
        case WeatherAtionTypes.GET_QUERY_NAME:
            return {
                ...state,
                queryName: action.payload
            }
        default:
            return state     
    }
}

export default weatherReducer