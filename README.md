# Live Weather App

## Overview
The Live Weather App is a web application that provides current weather information and a 5-day forecast for any city. The application is built using HTML, CSS, and JavaScript, and it fetches weather data from the Yahoo Weather API.

## Features
- Search for current weather conditions and a 5-day forecast for any city.
- Display saved city searches for quick access.
- Responsive design with a clean and intuitive user interface.

## Technologies Used
- HTML
- CSS
- JavaScript

## Getting Started
### Prerequisites
- A web browser (e.g., Chrome, Firefox, Edge)

### Usage
1. Open the [Live Weather App](https://lopezivan763.github.io/live-wheather-app/) in your web browser.
2. Enter the name of a city in the search bar and click the "Submit" button.
3. The current weather and 5-day forecast for the specified city will be displayed.
4. Click on a saved city to quickly view its weather information again.

## File Structure
```
live-weather-app/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── index.html
└── README.md
```

### `index.html`
The main HTML file that structures the content of the web application. It includes links to Bootstrap for styling and the custom CSS and JavaScript files.

### `style.css`
The custom CSS file that contains styles for the web application's layout and appearance.

### `app.js`
The JavaScript file that handles fetching weather data from the Yahoo Weather API, updating the DOM with the weather information, and managing saved city searches.

## Detailed Code Explanation
### `app.js`
- **Variables:**
  - `searchInputEl`, `submit`, `savedResultsEl`, `resultsContainerEl`, `loadingEl`, `loading2El`, `fiveDayEl`, `savedCityEl`: DOM elements used in the application.
- **Event Listeners:**
  - `savedResultsEl.addEventListener`: Fetches and displays weather data when a saved city is clicked.
  - `submit.addEventListener`: Fetches and displays weather data when the submit button is clicked.
- **Functions:**
  - `addCityToList(cityName)`: Adds a city to the saved cities list.
  - `getApi()`: Fetches weather data from the Yahoo Weather API and updates the UI.
  - `displayResults(data)`: Updates the UI with current weather information.
  - `displayForecast(data)`: Updates the UI with a 5-day weather forecast.

### `style.css`
- **Reset Styles:**
  - Resets default browser styles for consistency.
- **Main Styles:**
  - Styles for the header, search bar, results display, and forecast elements to ensure a visually appealing layout.

## API Integration
The application uses the Yahoo Weather API to fetch weather data. The API is accessed via a `fetch` request with the necessary headers, including the API key and host.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Live Demo
[Live Weather App](https://lopezivan763.github.io/live-wheather-app/)

## Screenshot
![Screenshot](assets/Screenshot.png)
<img width="1512" alt="Screenshot" src="https://github.com/lopezivan763/live-wheather-app/assets/84734876/7b89c289-c9d0-4668-9bad-3907ae6f7e08">
