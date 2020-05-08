const axios = require('axios')
const API_KEY = require('./config/API_KEY.js').API_KEY

const modelLocations = () => {
  const args = process.argv.slice(2).join(' ').split(', ')
  return args
}

const reportWeather = (locations, getCallback, logCallback) => {
  if (locations.length === 1 && locations[0] === '') {
    console.log('Error: No location argument(s) given')
  } else {
    locations.forEach(location => {
      getCallback(location, logCallback)
    })
  }
}

const getWeatherFromAPI = (location, callback) => {
  const params = {
    access_key: API_KEY,
    query: location
  }
  axios.get('http://api.weatherstack.com/current', {params})
    .then(weatherData => {
      callback(location, null, weatherData)
    })
    .catch(err => {
      callback(location, err)
    })
}

const logResultToConsole = (query, err, response) => {
  if (err) {
    console.log(`Error: Could not find weather for ${query}`)
  } else {
    const apiResponse = response.data
    console.log(`It is ${apiResponse.location.localtime} in ${apiResponse.location.name}. The weather is ${apiResponse.current.temperature} degrees Celsius and ${apiResponse.current.weather_descriptions}.`)
  }
}

module.exports = {
  modelLocations,
  reportWeather,
  getWeatherFromAPI,
  logResultToConsole
}