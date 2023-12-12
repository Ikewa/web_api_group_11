# Weather Widget README

## Introduction
This Weather Widget is a simple web application that allows users to get the current temperature of a city. It utilizes the OpenWeatherMap API to fetch weather data based on the user-entered city.

## Features
- User-friendly Interface: The web page provides a clean and user-friendly interface with a prominent title, input field for the city, and a button to retrieve weather information.
- Stylish Design: The widget has a visually appealing design with a yellow-themed weather container, contrasting buttons, and clear typography.
- Responsive Design: The layout is responsive and adapts well to different screen sizes, making it accessible across various devices.
- Real-time Weather Data: The widget fetches real-time weather data using the OpenWeatherMap API, displaying the current temperature of the specified city.
- Error Handling: It includes basic error handling to alert users if they forget to enter a city before requesting weather information.

## Setup and Usage
1. API Key: Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) by signing up for a free account.
2. Insert API Key: Replace the placeholder `apiKey` in the script tag with your actual OpenWeatherMap API key.
   ```javascript
   const apiKey = "9e2a7b140246478871f6a50ce26a2855";
   ```
3. Run the Application: Open the HTML file in a web browser to use the Weather Widget. Enter a city in the input field and click the "Get Weather" button to see the current temperature.

## Styling
The styling is achieved using CSS to create a visually appealing and cohesive design. The color scheme, font selection, and layout aim to enhance the overall user experience.

## Technologies Used
- HTML5: The structure of the web page.
- CSS3: Styling and layout.
- JavaScript: Interactivity and fetching data from the OpenWeatherMap API.
- OpenWeatherMap API: Used to obtain real-time weather data.

## Contributions
Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Acknowledgments
- The Weather Widget makes use of the OpenWeatherMap API to provide accurate and up-to-date weather information.
- Special thanks to the developers and contributors of the technologies and libraries used in this project.
