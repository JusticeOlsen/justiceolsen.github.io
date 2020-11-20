const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];
      var townNames = ['Fish Haven', 'Preston', 'Soda Springs'];
      for (let i = 0; i < towns.length; i++) {
        if (townNames.includes(towns[i].name)){

      let card = document.createElement('section');
      let data = document.createElement('div');
      let h2 = document.createElement('h2');
      let motto = document.createElement('h3');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rainfall = document.createElement('p');
      let photo = document.createElement('img');

      h2.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      pop.textContent = "Population: " + towns[i].currentPopulation;
      rainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
      photo.setAttribute('src', './lesson_9_images/' + towns[i].photo);
      photo.setAttribute('alt', towns[i].name);
      

      data.appendChild(h2);
      data.appendChild(motto);
      data.appendChild(year);
      data.appendChild(pop);
      data.appendChild(rainfall);
      
      card.appendChild(data);
      card.appendChild(photo);

      document.querySelector('div.cards').appendChild(card);
        }

    }
  });