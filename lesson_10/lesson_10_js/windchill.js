const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1ad91da0351622e04f82f3950739cdaa";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
        document.getElementById("current").textContent = jsObject.list[0].weather[0].main;
        document.getElementById("temp").textContent = (jsObject.list[0].main.temp) + "\u00B0F";
        document.getElementById("wind").textContent = (jsObject.list[0].wind.speed).toFixed(0) + " mph";
        document.getElementById("answer").textContent = windChill();

    });

function windChill() {
    var temp = parseFloat(document.getElementById("temp").innerHTML);
    var wind = parseFloat(document.getElementById("wind").innerHTML);
    if (temp <= 50 && wind >= 3) {
        var windchill = 35.74 + (0.6215 * temp) - 35.75 * (Math.pow(wind, 0.16)) + (0.4275 * temp) * (Math.pow(wind, 0.16));
        var answer = windchill.toFixed(0);
        document.getElementById("answer").innerHTML = answer + "&#730;F";
    } else {
        document.getElementById("answer").innerHTML = "N/A";
    }
}