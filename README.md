# weather
Weather app that logs current time and weather to console for a given city / zip.

Program can be executed from the console using command "weather" followed by comma seperated locations.

Example:
```
weather New York, 94114, Tokyo, asdfasf
```

Example output:
```
It is 2020-05-08 15:20 in New York. The weather is 8 degrees Celsius and Light Rain.
It is 2020-05-08 12:23 in San Francisco. The weather is 20 degrees Celsius and Partly cloudy.
It is 2020-05-09 04:23 in Tokyo. The weather is 17 degrees Celsius and Cloudy.
Error: Could not find weather for asdfasf
```

Weather data collected via the WeatherStack API:
https://weatherstack.com/

To insert API key, make a copy of API_KEY_sample.js and rename it to API_KEY.js with the API key included.
