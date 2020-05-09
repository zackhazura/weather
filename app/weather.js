#! /usr/bin/env node

const { reportWeather, modelLocations, getWeatherFromAPI, logResultToConsole } = require('./functions')

const locations = modelLocations()

reportWeather(locations, getWeatherFromAPI, logResultToConsole)
