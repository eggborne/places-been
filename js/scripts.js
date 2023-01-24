const places = {
  "Zimbabwe": {
    dateVisited: "January 1945",
    timeSpent: "4 years",
    rating: 3,
  },
  "Albuquerque": {
    dateVisited: "February 2016",
    timeSpent: "1 year",
    rating: 5,
  },
  "Phoenix": {
    dateVisited: "March 1888",
    timeSpent: "45 years",
    rating: 2,
  }
}

function Place(placeName, dateVisited, timeSpent, rating) {
  this.placeName = placeName;
  this.dateVisited = dateVisited;
  this.timeSpent = timeSpent;
  this.rating = rating;
}

Place.prototype.createElement = function() {
  let element = document.createElement('li');
  element.id = this.placeName;
  element.innerHTML = `<h3>${this.placeName}</h3>`;
  let details = `
    <p>Visited: ${this.dateVisited}</p>
    <p>Time Spent: ${this.timeSpent}</p>
    <p>Rating: ${'*'.repeat(this.rating)}</p>
  `;
  element.innerHTML += details;
  document.getElementById('list-area').append(element);
  element.addEventListener('pointerdown', (e) => {
    e.target.classList.toggle('open');
  });
}

window.onload = function() {
  for (let place in places) {
    let placeObj = places[place];
    let newPlace = new Place(place, placeObj.dateVisited, placeObj.timeSpent, placeObj.rating);
    newPlace.createElement();
  }
}