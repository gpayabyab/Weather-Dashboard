// API key for weather
const apiKey = "8ec10cf1e4d5606aff39cea2659b8089";

// variables for user search input, search button, recent searches,  current, forecast
const userSearchInput = document.getElementById("user-search-input");
const searchButton = document.getElementById("search-button");
const recentSearchContainer = document.getElementById("recent-search");
const currentWeatherContainer = document.getElementById("current");
const weatherForecastContainer = document.getElementById("forecast");

// create a function called handleUserInput
function handleUserInput(event) {
  event.preventDefault();
  // collect the value from userSearchInput
  var userInput = userSearchInput.value;
  runCurrentWeather(userInput);
  runForecastWeather(userInput);
}

//function of runCurrentWeather have it receive param called city
function runCurrentWeather(city) {
  // run the current weather api
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  )
    .then(function (response) {
      // convert the response into JSON
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.name);
      //   create the element
      const h2 = document.createElement("h2");

      //   add content/attr/styles
      h2.textContent = data.name;

      //   append to the curren weather container
      currentWeatherContainer.append(h2);
    });
}

function runForecastWeather(city) {
  // run the current weather api
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// create an event listener on the serchButton and have it run handleUserInput on submit
searchButton.addEventListener("submit", handleUserInput);
