const weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=1ad91da0351622e04f82f3950739cdaa";

fetch(weatherAPI)
    .then(response => response.json())
    .then(jsObject => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);

            let card = document.createElement("div");
            let dayName = document.createElement("span");
            let image = document.createElement("img");
            let conditions = document.createElement("span");

            dayName.textContent = weekdays[(d.getDay()) % 7];
            image.setAttribute("src", "http://openweathermap.org/img/wn/" + forecast[day].weather[0].icon + ".png");
            image.setAttribute("alt", forecast[day].weather[0].description);
            conditions.textContent = (forecast[day].main.temp).toFixed(0) + "\u00B0F";

            card.appendChild(dayName);
            card.appendChild(image);
            card.appendChild(conditions);

            document.querySelector("div.forecast").appendChild(card);
        }
    });
