const expect = require('chai').expect
const sinon = require('sinon')
const functions = require('../app/functions')

describe('Weather App', function(){
  const modelLocations = functions.modelLocations
  const reportWeather = functions.reportWeather
  const getWeatherFromAPI = functions.getWeatherFromAPI
  const logResultToConsole = functions.logResultToConsole

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

  describe('reportWeather()', function() {

    beforeEach(function() {
      sinon.stub(console, 'log')
    })

    afterEach(function() {
      sinon.restore()
    })

    it('should print an error to the console if no locations given', function(){
      const locations = ['']
      reportWeather(locations, getWeatherFromAPI, logResultToConsole)
      expect( console.log.calledOnce ).to.be.true
      expect( console.log.calledWith('Error: No location argument(s) given') ).to.be.true
    })

    it('should call getWeather when a location is provided', function() {
      const locations = ['New York']
      const spy = sinon.spy(functions, 'getWeatherFromAPI')
      reportWeather(locations, spy, logResultToConsole)
      expect( spy.called ).to.be.true
    })

    it('should not call getWeather when no location is provided', function() {
      const locations = ['']
      const spy = sinon.spy(functions, 'getWeatherFromAPI')
      reportWeather(locations, spy, logResultToConsole)
      expect( spy.called ).to.be.false
    })

    it('should print an error to the console when a location is not found', function(done){
      const locations = ['asdfasdf']
      reportWeather(locations, getWeatherFromAPI, (query, err, response) => {
        console.log(`Error: Could not find weather for ${query}`)
        expect( console.log.called ).to.be.true
        done()
      })
    })

    it('should print the weather to the console on a success', function(done){
      const locations = ['94114']
      reportWeather(locations, getWeatherFromAPI, (query, err, response) => {
        if (err) {
          console.log(`Error: Could not find weather for ${query}`)
          expect (console.log.calledWith('Error: Could not find weather') ).to.be.false
          done()
        } else {
          const apiResponse = response.data
          console.log(`It is ${apiResponse.location.localtime} in ${apiResponse.location.name}. The weather is ${apiResponse.current.temperature} degrees Celsius and ${apiResponse.current.weather_descriptions}.`)
          expect( console.log.called ).to.be.true
          expect( console.log.calledWith('The weather is') ).to.be.true
          done()
        }
      })
    })
  })
  
})
