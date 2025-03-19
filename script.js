// Smart Irrigation System 
function checkIrrigation() {
  const moisture = Math.floor(Math.random() * 100);  // Simulated moisture level
  document.getElementById('moisture-level').innerText = moisture + '%';

  const message = (moisture < 30) 
    ? "⚠️ Low moisture detected! Start irrigation." 
    : "✅ Moisture level is good.";

  document.getElementById('irrigation-result').innerText = message;

  // Drought risk check via moisture
  if (moisture < 20) {
    document.getElementById('drought-alert').innerText = "🚨 High Drought Risk! Soil moisture critically low.";
  }
}


// Water Recycling System
function checkRecycling() {
  const recycledLitres = Math.floor(Math.random() * 1000);  // Simulated recycled water data
  document.getElementById('recycled-water').innerText = recycledLitres + ' litres';

  const message = recycledLitres > 500 
    ? "✅ High recycling today!" 
    : "⚠️ Low recycling. Let's do better!";

  document.getElementById('recycling-message').innerText = message;
}


// Live Weather Data with Drought Risk Alerts
const apiKey = "dfdccc5d40ce508712cc189dbf25210e";  // Your real API key
const city = "mysore";  // Example city
function getLiveWeather() {
  const city = "mysore";  // You can change the city
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const weatherDescription = data.weather[0].description;
      document.getElementById('weather-status').innerText = `🌡️ ${temp}°C, ${weatherDescription}`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById('weather-status').innerText = "❌ Unable to fetch weather.";
    });
}



// Drought Risk Alerts 🚨
function checkDroughtRisk(temp, rainfall) {
  if (temp > 35 && rainfall < 5) {
    document.getElementById('drought-alert').innerText = "🚨 High Drought Risk! Conserve water now.";
  } else {
    document.getElementById('drought-alert').innerText = "✅ No immediate drought risk.";
  }
}


// Awareness Notifications 🔔
function showAwarenessNotification() {
  alert("💡 Water Tip: Save water by reusing greywater and fixing leaks immediately!");
}


// On page load, activate weather check and awareness
window.onload = () => {
  getLiveWeather();
  setTimeout(showAwarenessNotification, 3000);  // Show tip after 3 seconds
};
