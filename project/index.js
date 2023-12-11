
    function getWeather() {
      const apiKey = "9e2a7b140246478871f6a50ce26a2855";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=";

      const city = document.getElementById('city').value;

      if (!city) {
        alert('Please enter a city');
        return;
      }

      fetch(`${apiUrl}+${city}+&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const temperature = Math.round(data.main.temp - 273.);
          const cityName = data.name;

          document.getElementById("weather").innerHTML = `Current Temperature in ${cityName}: ${temperature}°C`;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
