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

module.exports = {
  modelLocations,
  reportWeather
}