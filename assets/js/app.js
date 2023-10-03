var searchInputEl = document.querySelector('#city-input');
var submit = document.querySelector('#submit-btn');
var savedResultsEl = document.querySelector('#saved-results');
var resultsContainerEl = document.querySelector('#display-result');
var loadingEl = document.querySelector('#loading-icon');
var loading2El = document.querySelector('#loading-icon2');
var fiveDayEl = document.querySelector('#five-day-forecast');
var savedCityEl = localStorage.getItem('savedCity');

if (savedCityEl) {
    addCityToList(savedCityEl);
} else {
    savedResultsEl.textContent = 'No saved city.';
}

savedResultsEl.addEventListener('click', function() {
    getApi();
    savedResultsEl.textContent = 'No saved city.';
});


function addCityToList(cityName) {
    var listItem = document.createElement('li');
    listItem.textContent = cityName;

   
    listItem.addEventListener('click', function() {
        searchInputEl.value = cityName; 
        getApi(); 
    });

    savedResultsEl.appendChild(listItem);
}

loadingEl.style.display = 'none';
loading2El.style.display = 'none';
function getApi(){
    var searchQuery = searchInputEl.value;
    loadingEl.style = 'display: flex';
    loading2El.style = 'display: flex';
if(searchQuery){
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=' + searchQuery + '&format=json&u=f';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1715b24a43msh9b5023d4aa71c9bp108651jsn692826a37b09',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

fetch(url, options)
.then(function (response) {
    if(response.ok){
        return response.json();
     
    }
    else{
        alert('Response was not ok')
    }
})
.then(function (data) {
    loadingEl.style = 'display: none';
    loading2El.style = 'display: none';
    displayResults(data);
    displayForecast(data);
    console.log(data);
})
}
};


var displayResults = function(data){
    resultsContainerEl.innerHTML = '';
    
    var cityEl = data.location.city; 
    var tempEl = data.current_observation.condition.temperature;
    var humidityEl = data.current_observation.atmosphere.humidity;
    var windEl = data.current_observation.wind.speed;

        displayEl = document.createElement('strong');
        displayTempEl = document.createElement('h2');
        displayhumidityEl = document.createElement('h2');
        displayWindEl = document.createElement('h2');
        var dateEl = document.createElement('h3'); 

        displayEl.textContent = cityEl;
        displayTempEl.textContent = 'Temperature: ' + tempEl + '°F';
        displayhumidityEl.textContent = 'Humidity: ' + humidityEl + '%'
        displayWindEl.textContent = 'Wind: ' + windEl + ' MPH';


        var today = new Date();
        var date = new Intl.DateTimeFormat("en-US", {
          dateStyle: "full"
        });
        console.log(date.format(today));
        dateEl.textContent = date.format(today);
        
        dateEl.style.fontSize = '20px';
        dateEl.style.fontWeight = 'bold';

        displayEl.style.fontSize = '50px';
        displayEl.style.fontWeight = 'bold';
        displayEl.style.paddingBottom = '20px'; 

        displayTempEl.style = 'font-size:25px'
        displayhumidityEl.style = 'font-size:25px'
        displayWindEl.style = 'font-size:25px'

        resultsContainerEl.appendChild(displayEl);
        resultsContainerEl.appendChild(dateEl);
        resultsContainerEl.appendChild(displayTempEl);
        resultsContainerEl.appendChild(displayhumidityEl);
        resultsContainerEl.appendChild(displayWindEl);

        localStorage.setItem('savedCity', cityEl);
        console.log(resultsContainerEl)
};


var  displayForecast = function(data){
    fiveDayEl.innerHTML = '';

    for(var i = 0; i < 5 && data.forecasts.length; i++){
        var forecast = data.forecasts[i];
        
        var listForecastItem = document.createElement('li');
        listForecastItem.innerHTML = `${forecast.day}<br>High: ${forecast.high}°F<br>Low: ${forecast.low}°F<br>${forecast.text}`;
    
        fiveDayEl.appendChild(listForecastItem);
    }
    console.log(fiveDayEl);
    
};


submit.addEventListener('click', function (event) {
    event.preventDefault(); 
    getApi();
  });

