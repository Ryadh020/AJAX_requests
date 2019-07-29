// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

// Prepare openweathermap.org request
let apiRequest = new XMLHttpRequest();


/* 
 * Capture and handle form submit event
 * Prevent default behaviour, prepare and send API request
*/
cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e',true);
    apiRequest.send();
});

apiRequest.onreadystatechange  = function() {
    if(this.readyState === 4) {
        if(this.status === 404) {
         return reportSection.textContent = "city not found";
        }
        const response = JSON.parse(this.response);
        reportSection.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
    }
}



