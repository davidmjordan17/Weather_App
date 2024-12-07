//Declaring variables for DOM Manipulation
const locationInput = document.getElementById('location-input')
const searchButton = document.getElementById('search-button')
const displayPlace = document.getElementById('display-place')
const displayCondition = document.getElementById('display-condition')
const displayTemp = document.getElementById('display-temp')
const displayHumidity = document.getElementById('display-humidity')
const displayFeelsLike = document.getElementById('display-feels-like')

// URL With Custom API_KEY
let url = 'https://api.weatherstack.com/current?access_key=YOUR_API_KEY_HERE';

//GET Method for the fetch function
const options = {
	method: 'GET'
};

//Fetches content using input from user and the API Key, gets the data, and displays it to the user
function displayWeather() {
  fetch(`${url}&query=${locationInput.value}`, options)
    .then(response => response.json())
    .then(data => {
      if (data.current) {

        displayPlace.innerHTML = `${data.location.name}, ${data.location.region}`;
        displayTemp.innerHTML = `Temperature: ${data.current.temperature}°C`;
        displayCondition.innerHTML = `Condition: ${data.current.weather_descriptions[0]}`;
        displayHumidity.innerHTML = `Humidity: ${data.current.humidity}%`;
        displayFeelsLike.innerHTML = `Feels Like: ${data.current.feelslike}°C`;
      } else {
        console.log('Error: Invalid API response');
        alert('Could not fetch weather data. Check the location input.');
      }

    })
    .catch(error => console.log('Error:', error));
}

// Calls displayWeather when user clicks the search button
searchButton.addEventListener('click', displayWeather)