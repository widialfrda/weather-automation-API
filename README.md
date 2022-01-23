# weather-API-automation-js

The test case of this project will automate link https://www.weatherbit.io/api/swaggerui/weather-api-v2#! with these APIs:

- GET /current?lat={lat}&lon={lon} for values {lat} as 40.730610 and {lon} as -73.935242 (current weather data)
- GET /forecast/3hourly?postal_code={postal_code} for values {postal_code} as 28546 (hourly historical weather data)

## Libraries

- Node.js 16.13.2
- npm 8.1.2
- Supertest 6.1.6
- Mocha 9.1.3
- Babel 7.16



## Configuration and How To Run

1. Download the text editor or IDE, in this case I use Visual Studio

2. Download Node.js (include npm) from https://nodejs.org/en/download/

3. Create new folder in your computer

4. Open up the terminal or command prompt and locate to your new folder, create a new npm package to create a package.json file

   `npm init`

5. Install all used libraries 

   `npm install`

6. Open the project in text editor or IDE, the project structure would be like this

   ![image](https://user-images.githubusercontent.com/63556820/150695301-b2ef7cba-c9b7-4f74-9837-096c347c4892.png)


7. Get your API key by registering at https://www.weatherbit.io/account/create

8. Declare the variable that contains the value of data that we want to get when do automate, then build two method. First is automate GET /current?lat={lat}&lon={lon} for values {lat} as 40.730610 and {lon} as -73.935242, and second is automate GET /forecast/3hourly?postal_code={postal_code} 

9. When you have done with your script, run the project on the terminal and type `npm test`

10. When the code is run well, commit the project and push to your github account
