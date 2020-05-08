const axios = require('axios')
const API_KEY = require('./API_KEY.js').API_KEY

const modelLocations = () => {
  const args = process.argv.slice(2).join(' ').split(', ')
  return args
}

module.exports = {
  modelLocations
}