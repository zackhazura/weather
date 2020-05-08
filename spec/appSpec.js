const expect = require('chai').expect
const sinon = require('sinon')
const functions = require('../app/functions')

describe('Weather App', function(){
  
  const reportWeather = functions.reportWeather
  const getWeatherFromAPI = functions.getWeatherFromAPI
  const logResultToConsole = functions.logResultToConsole
  const modelLocations = functions.modelLocations

  describe('modelLocations()', function() {

    it('should return an array', function(){
      const result = modelLocations()
      expect(result).to.be.an('array')
    })

    it('should produce an array of strings', function(){
      let areStrings = true
      const result = modelLocations()
      for (let i = 0; i < result.length; i++) {
        if (typeof result[i] !== 'string') {
          areStrings = false
        }
      }
      expect(areStrings).to.be.true
    })
  })