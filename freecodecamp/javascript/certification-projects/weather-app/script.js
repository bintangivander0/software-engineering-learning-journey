const citySelect = document.getElementById("city-choices");
const getWeatherBtn = document.getElementById("get-weather-btn");

const locationEl = document.getElementById("location");
const weatherIconEl = document.getElementById("weather-icon");
const mainTempEl = document.getElementById("main-temperature");
const weatherMainEl = document.getElementById("weather-main");
const humidityEl = document.getElementById("humidity");
const feelsLikeEl = document.getElementById("feels-like");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");
const windArrowEl = document.getElementById("wind-arrow");

function getValue (val, suffix = "") {
  return (val !== undefined && val !== null) ? `${val}${suffix}` : "N/A";
}

async function getWeather (city) {
  try {
    if (!city) return;
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

async function showWeather (city) {
  if (!city) return;
  const data = await getWeather(city);
  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }
  locationEl.textContent = getValue(data.name);
  if (data.weather && data.weather[0]) {
    weatherIconEl.style.visibility = "visible";
    weatherIconEl.src = data.weather[0].icon || "";
    weatherIconEl.alt = data.weather[0].description || "Weather Icon";
    weatherMainEl.textContent = getValue(data.weather[0].main);
  } else {
    weatherIconEl.src = "";
    weatherMainEl.textContent = "N/A";
  }

  mainTempEl.textContent = data.main?.temp !== undefined ? `${data.main.temp}°C` : "N/A";
  feelsLikeEl.textContent = data.main?.feels_like !== undefined ? `${data.main.feels_like}°C` : "N/A";
  humidityEl.textContent = data.main?.humidity !== undefined ? `${data.main.humidity}%` : "N/A";

  windEl.textContent = data.wind?.speed !== undefined ? `${data.wind.speed} m/s` : "N/A";
  windGustEl.textContent = data.wind?.gust !== undefined ? `${data.wind.gust} m/s` : "N/A";

  if (windArrowEl && data.wind?.deg !== undefined) {
    windArrowEl.style.transform = `rotate(${data.wind.deg}deg)`;
  }
} 

if (getWeatherBtn) {
  getWeatherBtn.addEventListener("click", () => {
    const selectedCity = citySelect.value;
    if (selectedCity) {
      showWeather(selectedCity);
    }
  });
}