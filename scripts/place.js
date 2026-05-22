//calculate wind
const temperatureOutput = document.getElementById('celcius-temperature')
const weatherOutput = document.getElementById('weather_condition')
const windSpeedOutput = document.getElementById('wind-speed')
const windChillOutput = document.getElementById('wind-chill')

let temperature_C = 10;
let weather = "Partly Cloudy";
let wind_speed_per_hour = 5;

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);
}

temperatureOutput.textContent = temperature_C;
temperatureOutput.append(" °C");
weatherOutput.textContent = weather;
windSpeedOutput.textContent = wind_speed_per_hour;
windSpeedOutput.append(" km/h");

if (temperature_C <= 10 && wind_speed_per_hour > 4.8) {
    wind_chill = calculateWindChill(temperature_C, wind_speed_per_hour).toFixed(1);
    windChillOutput.textContent = wind_chill;
    windChillOutput.append(" °C");
}
else {
    wind_chill = "N/A";
    windChillOutput.textContent = wind_chill;
}


//footer code
const current_year = document.querySelector("#currentyear");
const today = new Date()

current_year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;
